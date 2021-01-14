from decimal import Decimal
import decimal
import flask
import json
import mysql.connector
import requests
import config
from flask import request, jsonify


def decimal_default(obj):
    if isinstance(obj, decimal.Decimal):
        return float(obj)
    raise TypeError


app = flask.Flask(__name__)
app.config["DEBUG"] = True


@app.route('/api/v1/world', methods=['GET'])
def api_all():
    resp = requests.get('https://disease.sh/v3/covid-19/all').json()
    world = {
        "cases": resp["cases"],
        "deaths": resp["deaths"],
        "recovered": resp["recovered"],
        "active": resp["active"],
        "critical": resp["critical"],
        "tests": resp["tests"],
        "population": resp["population"],
        "casesPerOneMillion": resp["casesPerOneMillion"],
        "deathsPerOneMillion": resp["deathsPerOneMillion"],
        "recoveredPerOneMillion": resp["recoveredPerOneMillion"],
        "activePerOneMillion": resp["activePerOneMillion"],
        "criticalPerOneMillion": resp["criticalPerOneMillion"],
        "testsPerOneMillion": resp["testsPerOneMillion"]
    }
    del resp
    return jsonify(world)


@app.route('/api/v2/world', methods=['GET'])
def api_all_v():
    cnx = mysql.connector.connect(user=config.mysql["user"], port=config.mysql["port"],
                                  password=config.mysql["password"],
                                  host=config.mysql["host"], database=config.mysql["database"])
    cursor = cnx.cursor()

    sql = "select sum(population) as 'population', sum(critical) as 'critical', sum(total_cases) as 'cases', " \
          "sum(total_recovered) as 'recovered', sum(total_deaths) as 'deaths', sum(total_tests) as 'tests', " \
          "sum(total_cases)/(sum(population)/1000000) as 'casesPerOneMillion', sum(total_recovered)/(sum(" \
          "population)/1000000) as 'recoveredPerOneMillion', sum(total_deaths)/(sum(population)/1000000) as " \
          "'deathsPerOneMillion', sum(total_tests)/(sum(population)/1000000) as 'testsPerOneMillion' from regions "

    cursor.execute(sql)
    row_headers = [x[0] for x in cursor.description]  # we need column names for key-value in json output
    db_resp = cursor.fetchall()
    json_db_resp = []
    tmp = []
    for item in db_resp[0]:
        print(item)
        tmp.append(float(item))
    for result in [tmp]:
        json_db_resp.append(dict(zip(row_headers, result)))
    return jsonify(json_db_resp[0])


app.run()
