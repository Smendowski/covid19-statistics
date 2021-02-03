import json
import string
import random
import flask
import mysql.connector
import requests
import werkzeug
import ast

from backend import config
from flask import request, jsonify

# establish DB connection
cnx = mysql.connector.connect(user=config.mysql["user"], port=config.mysql["port"],
                              password=config.mysql["password"],
                              host=config.mysql["host"], database=config.mysql["database"])

app = flask.Flask(__name__)
app.config["DEBUG"] = True


@app.route('/api/v1/world', methods=['GET'])
def api_world_stats():
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
def api_world_stats_db():
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
        tmp.append(float(item))  # by default decimal type is used, so we convert

    for result in [tmp]:
        json_db_resp.append(dict(zip(row_headers, result)))
    return jsonify(json_db_resp[0])


@app.route('/api/resources', methods=['GET'])
def resources():
    f = open("api.json")
    return jsonify(json.load(f))


@app.route('/api/updated', methods=['GET'])
def updated():
    cursor = cnx.cursor()
    sql = "select date from cases order by date desc limit 1"
    cursor.execute(sql)
    resp = cursor.fetchall()

    return jsonify({"updated": resp[0][0]})


@app.route('/api/newsletter/delete/<p_hash>', methods=['DELETE'])
def newsletter_del(p_hash):
    if request.method == 'DELETE':
        cursor = cnx.cursor()

        sql_verify = "select id from newsletter where hash = %s"
        cursor.execute(sql_verify, (str(p_hash),))
        _ = cursor.fetchall()
        if cursor.rowcount == 0:  # there is no such hash
            return 'Invalid parameter!', 404

        sql_delete = "delete from newsletter where hash = %s"
        cursor.execute(sql_delete, (str(p_hash),))
    else:
        return 'Invalid method!', 405

    cnx.commit()
    return {"success": "true"}


@app.route('/api/newsletter', methods=['POST'])
def newsletter():
    if request.method == 'POST':
        req_data = ast.literal_eval(request.get_data(False, True, True))

        email = req_data["email"]
        subscriptions = req_data['subscriptions']

        # generate hash for unsubscription
        hash_ = ''.join(random.SystemRandom().choice(string.digits + string.ascii_letters) for _ in range(40))

        cursor = cnx.cursor()
        sql = "insert into newsletter (user_email, region_id, hash) values " \
              "(%s, (select id from regions where region = %s and is_country = 1), %s)"
        cursor.execute(sql, (email, subscriptions, hash_))
    else:
        return 'Invalid method!', 405

    cnx.commit()
    return {"success": "true"}


@app.after_request
def apply_header(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    return response


@app.errorhandler(werkzeug.exceptions.BadRequest)
def handle_bad_request(e):
    return 'bad request!', 400


app.run()
