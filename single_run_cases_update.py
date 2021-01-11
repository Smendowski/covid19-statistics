import config
from pprint import pprint
import requests
import mysql.connector

cnx = mysql.connector.connect(user=config.mysql["user"], port=config.mysql["port"], password=config.mysql["password"],
                              host=config.mysql["host"], database=config.mysql["database"])
curs = cnx.cursor()

resp = requests.get('https://disease.sh/v3/covid-19/historical?lastdays=all').json()
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
            curs.execute(sql_ins, val)

    else:
        for date in reg["timeline"]["cases"]:
            if reg["timeline"]["cases"][date] < reg["timeline"]["deaths"][date] + reg["timeline"]["recovered"][str(date)]:
                val = (reg["province"], 0, reg["timeline"]["deaths"][date] + reg["timeline"]["recovered"][str(date)], reg["timeline"]["deaths"][date],
                       reg["timeline"]["recovered"][date], date, '%c/%e/%y')
            else:
                val = (reg["province"], 0, reg["timeline"]["cases"][date], reg["timeline"]["deaths"][date],
                       reg["timeline"]["recovered"][date], date, '%c/%e/%y')
            pprint(val)
            curs.execute(sql_ins, val)

cnx.commit()
