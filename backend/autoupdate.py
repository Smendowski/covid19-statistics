import requests
from pprint import pprint
from backend import config
import json
import time
import mysql.connector

cnx = mysql.connector.connect(user=config.mysql["user"], port=config.mysql["port"], password=config.mysql["password"],
                              host=config.mysql["host"], database=config.mysql["database"])
curs = cnx.cursor()
curs_2 = cnx.cursor()


if config.update["countries"]:
    r = requests.get('https://corona.lmao.ninja/v2/countries?yesterday&sort').json()
    sql = "insert into countries (country, code) values (%s, %s);"

    uniq_contry = []
    for row in r:
        if not (row['country'] in uniq_contry):
            val = (str(row['country']), str(row['countryInfo']['iso3']))
            curs.execute(sql, val)
            pprint(str(row['country']) + ' ' + str(row['countryInfo']['iso3']))
            uniq_contry.append(row['country'])

    cnx.commit()
    print(len(uniq_contry))

if config.update["continents"]:
    continent2country = {}
    f = open('country-and-continent-codes-list-csv_json.json')
    for c2c in json.load(f):
        continent2country[str(c2c['Three_Letter_Country_Code'])] = str(c2c['Continent_Name'])

    # pprint(continent2country)
    # pprint(len(continent2country))

    sql = "select id, code from countries;"
    curs.execute(sql)
    res = curs.fetchall()

    sql_ins = "insert into continents (continent, countries_id) values (%s, %s);"
    curs_ins = cnx.cursor()

    for i in res:
        val = (str(continent2country[i[1]]), i[0])
        curs_ins.execute(sql_ins, val)
        pprint(str(i[0]) + '-' + i[1] + '-' + continent2country[i[1]])

    cnx.commit()

if config.update["regions"]:
    # query for regions, is_country = 0;
    sql_ins_reg = "insert ignore into regions (region, country_id,  total_cases, total_deaths, " \
                  "total_recovered,  is_country, latitude, longitude) values (%s, (select id from " \
                  "countries where country = %s), %s, %s, %s, 0, %s, %s)"

    # query for countries, is_country = 1; more data available
    sql_ins_country = "insert into regions (region, country_id, population, total_cases, total_deaths, " \
                      "total_recovered, total_tests, is_country, active_cases, " \
                      "latitude, longitude, critical) values (%s, (select id from " \
                      "countries where country = %s), %s, %s, %s, %s, %s, 1, %s, %s, %s, %s)"

    # update query for coordinates
    sql_upd_coord = "update regions set latitude = %s, longitude = %s where region = %s and is_country = 1"

    resp_ = requests.get('https://corona.lmao.ninja/v2/countries').json()
    for region in resp_:
        val = (region['country'], region['country'], region['population'], region['cases'], region['deaths'],
               region['recovered'], region['tests'], region['active'],
               region['countryInfo']['lat'], region['countryInfo']['long'], region['critical'])
        pprint(sql_ins_country % val)
        curs.execute(sql_ins_country, val)

    resp = requests.get('https://corona.lmao.ninja/v2/jhucsse').json()
    _ = 1
    for region in resp:
        forbbiden = ["Unknown", "Diamond Princess", "Grand Princess", "Repatriated Travellers", "Port Quarantine",
                     "MS Zaandam"]
        if region['country'] == 'US':
            continue  # no US, cuz API goes as deep as counties, there is no need for that
        if (region['province'] in forbbiden) or (region['country'] in forbbiden):
            # print('skip: ' + region['province'])
            continue  # filter out some bugs? in api
        if region['coordinates']['latitude'] == "":
            continue

        # update coordinates for countries, cuz this API offers better precision
        if region['province'] is None:
            val = (region['coordinates']['latitude'], region['coordinates']['longitude'], region['country'])
            pprint(str(_) + '. ' + sql_upd_coord % val)
            curs.execute(sql_upd_coord, val)
        else:
            val = (region['province'], region['country'], region['stats']['confirmed'], region['stats']['deaths'],
                   region['stats']['recovered'], region['coordinates']['latitude'], region['coordinates']['longitude'])
            pprint(str(_) + '. ' + sql_ins_reg % val)
            curs.execute(sql_ins_reg, val)
        _ = _ + 1
    cnx.commit()

if config.update["cases"]:
    # TODO: change key in regions add is_country to unique key
    # TODO: active cases = cases - recovered - deaths
    # TODO: artifacts in data -> keep 0 or use previous value
    # TODO: data for US and Poland
    # TODO: poor API availability -> loop until API is available back

    resp = requests.get('https://disease.sh/v3/covid-19/historical?lastdays=all').json()

    sql = "select country_id from regions where region = %s and is_country = %s"

    sql_ins = "insert into cases (region_id, cases, deaths, recovered, date) values ((select id from regions " \
              "where region = %s and is_country = %s), %s, %s, %s, str_to_date(%s, %s));"

    for reg in resp:
        if reg["province"] is None:
            for date in reg["timeline"]["cases"]:
                if reg["timeline"]["cases"][date] < reg["timeline"]["deaths"][date] + reg["timeline"]["recovered"][
                    str(date)]:
                    val = (reg["country"], 1, reg["timeline"]["deaths"][date] + reg["timeline"]["recovered"][str(date)],
                           reg["timeline"]["deaths"][date],
                           reg["timeline"]["recovered"][str(date)], date, '%c/%e/%y')
                else:
                    val = (reg["country"], 1, reg["timeline"]["cases"][date], reg["timeline"]["deaths"][date],
                           reg["timeline"]["recovered"][str(date)], date, '%c/%e/%y')
                pprint(sql_ins % val)
                curs.execute(sql_ins, val)

        else:
            for date in reg["timeline"]["cases"]:
                if reg["timeline"]["cases"][date] < reg["timeline"]["deaths"][date] + reg["timeline"]["recovered"][
                    str(date)]:
                    val = (
                        reg["province"], 0, reg["timeline"]["deaths"][date] + reg["timeline"]["recovered"][str(date)],
                        reg["timeline"]["deaths"][date],
                        reg["timeline"]["recovered"][date], date, '%c/%e/%y')
                else:
                    val = (reg["province"], 0, reg["timeline"]["cases"][date], reg["timeline"]["deaths"][date],
                           reg["timeline"]["recovered"][date], date, '%c/%e/%y')
                pprint(val)
                curs.execute(sql_ins, val)

    cnx.commit()

if config.update["update"]:

    # API with all the regions
    resp = requests.get('https://corona.lmao.ninja/v3/covid-19/jhucsse').json()

    # API with detailed information on countries
    r = requests.get('https://disease.sh/v3/covid-19/countries').json()

    sql_upd_reg = "update regions set total_cases = %s, total_deaths = %s, total_recovered = %s" \
                  " where region = %s and is_country = 0"

    sql_upd_country = "update regions set total_cases = %s, total_deaths = %s, total_recovered = %s, critical = %s, " \
                      "total_tests = %s where region = %s and is_country = 1"

    for region in resp:
        if not (region['province'] is None):  # we're dealing with countries
            val = (region['stats']['confirmed'], region['stats']['deaths'], region['stats']['recovered'],
                   region['province'])
            pprint(sql_upd_reg % val)
            curs.execute(sql_upd_reg, val)

    cnx.commit()
    time.sleep(10)
    for region in r:
        val = (region['cases'], region['deaths'], region['recovered'], region['critical'], region['tests'],
               region['country'])
        curs_2.execute(sql_upd_country, val)
    cnx.commit()

    curs_add = cnx.cursor()

    resp = requests.get('https://disease.sh/v3/covid-19/historical?lastdays=1').json()
    pprint(len(resp))

    sql = "select country_id from regions where region = %s and is_country = %s"

    sql_ins = "insert into cases (region_id, cases, deaths, recovered, date) values ((select id from regions " \
              "where region = %s and is_country = %s), %s, %s, %s, str_to_date(%s, %s));"

    for reg in resp:
        if reg["province"] is None:
            for date in reg["timeline"]["cases"]:
                if reg["timeline"]["cases"][date] < reg["timeline"]["deaths"][date] + reg["timeline"]["recovered"][
                    str(date)]:
                    val = (reg["country"], 1, reg["timeline"]["deaths"][date] + reg["timeline"]["recovered"][str(date)],
                           reg["timeline"]["deaths"][date],
                           reg["timeline"]["recovered"][str(date)], date, '%c/%e/%y')
                else:
                    val = (reg["country"], 1, reg["timeline"]["cases"][date], reg["timeline"]["deaths"][date],
                           reg["timeline"]["recovered"][str(date)], date, '%c/%e/%y')
                pprint(sql_ins % val)
                curs_add.execute(sql_ins, val)

        else:
            for date in reg["timeline"]["cases"]:
                if reg["timeline"]["cases"][date] < reg["timeline"]["deaths"][date] + reg["timeline"]["recovered"][
                    str(date)]:
                    val = (
                        reg["province"], 0, reg["timeline"]["deaths"][date] + reg["timeline"]["recovered"][str(date)],
                        reg["timeline"]["deaths"][date],
                        reg["timeline"]["recovered"][date], date, '%c/%e/%y')
                else:
                    val = (reg["province"], 0, reg["timeline"]["cases"][date], reg["timeline"]["deaths"][date],
                           reg["timeline"]["recovered"][date], date, '%c/%e/%y')
                pprint(val)
                curs_add.execute(sql_ins, val)

    cnx.commit()
