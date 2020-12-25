import requests
from pprint import pprint
import config
import json
import mysql.connector

cnx = mysql.connector.connect(user=config.mysql["user"], port=config.mysql["port"], password=config.mysql["password"],
                              host=config.mysql["host"], database=config.mysql["database"])
curs = cnx.cursor()

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
    sql_ins_reg = "insert into regions (region, country_id,  total_cases, total_deaths, " \
                  "total_recovered,  is_country, latitude, longitude) values (%s, (select id from " \
                  "countries where country = %s), %s, %s, %s, 1, %s, %s)"

    # query for countries, is_country = 1; more data available
    sql_ins_country = "insert into regions (region, country_id, population, total_cases, total_deaths, " \
                      "total_recovered, total_tests, is_country, active_cases, cases_per_1M, deaths_per_1M, " \
                      "tests_per_1M, recovered_per_1M, latitude, longitude, critical) values (%s, (select id from " \
                      "countries where country = %s), %s, %s, %s, %s, %s, 1, %s, %s, %s, %s, %s, %s, %s, %s)"
    # update query for coordinates
    sql_upd_coord = "update regions set latitude = %s, longitude = %s where region = %s and is_country = 1"

    resp_ = requests.get('https://corona.lmao.ninja/v2/countries').json()
    for region in resp_:
        val = (region['country'], region['country'], region['population'], region['cases'], region['deaths'],
               region['recovered'], region['tests'], region['active'], region['casesPerOneMillion'],
               region['deathsPerOneMillion'], region['testsPerOneMillion'], region['recoveredPerOneMillion'],
               region['countryInfo']['lat'], region['countryInfo']['long'], region['critical'])
        pprint(sql_ins_country % val)
        # curs.execute(sql_ins_country, val)

    resp = requests.get('https://corona.lmao.ninja/v2/jhucsse').json()
    for region in resp:
        if region['country'] == 'US':
            continue  # no US, cuz API goes as deep as counties, there is no need for that
        if region['province'] == "Unknown":
            continue  # filter out some bugs? in api

        # update coordinates for countries, cuz this API offers better precision
        if region['province'] is None:
            val = (region['coordinates']['latitude'], region['coordinates']['longitude'], region['country'])
            pprint(sql_upd_coord % val)
            # curs.execute(sql_upd_coord, val)
        else:
            val = (region['province'], region['country'], region['stats']['confirmed'], region['stats']['deaths'],
                   region['stats']['recovered'], region['coordinates']['latitude'], region['coordinates']['longitude'])
            pprint(sql_ins_reg % val)
            # curs.execute(sql_upd_coord, val)

    cnx.commit()
