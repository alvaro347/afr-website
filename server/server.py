from flask import Flask, render_template, request
from flask import redirect, jsonify, url_for, flash
from flask import session as login_session
from flask import make_response

from sqlalchemy import create_engine, asc
from sqlalchemy.orm import sessionmaker
from database_setup import Base, Gallery, Pictures, User
from oauth2client.client import flow_from_clientsecrets
from oauth2client.client import FlowExchangeError
from werkzeug.utils import secure_filename
from flask_cors import CORS, cross_origin


import httplib2
import requests
import random
import string
import json
import os

app = Flask(
    __name__, static_folder='../static/dist', template_folder='../static'
)
CORS(app)


engine = create_engine('sqlite:///imagegallery.db')
Base.metadata.bind = engine
DBSession = sessionmaker(bind=engine)
session = DBSession()


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return render_template('index.html')


# @app.route('/')
# def home():
#     return render_template('index.html')


@app.route('/developer')
def developer():
    return render_template('developer.html')

# @app.route('/hello')
# def hello():
#     return get_hello()


def get_hello():
    greeting_list = ['Ciao', 'Hei', 'Salut', 'Hola', 'Hallo', 'Hej']
    return random.choice(greeting_list)


# @app.route('/hello', methods=['GET'])
# def hello_world():
#     jsonResp = {'jack': 4098, 'sape': 4139}
#     print(jsonify(jsonResp))
#     return jsonify(jsonResp)


@app.route('/hello', methods=['GET'])
def hello():
    # if 5 == 5:
    #     return redirect('/login')
    galleries = session.query(Gallery).all()
    return jsonify(galleries=[gallery.serialize for gallery in galleries])



if __name__ == '__main__':
    app.debug = True
    app.run(host='0.0.0.0', port=5003)
