"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

from flask_jwt_extended import JWTManager
from flask_jwt_extended import create_access_token
from flask_jwt_extended import jwt_required
from flask_jwt_extended import get_jwt_identity

api = Blueprint('api', __name__)

@api.route('/register',methods=['POST'])
def signup():
        body=request.get_json()
        new_user=User(email=body['email'],password=body['password'],is_active=True)
        db.session.add(new_user)
        db.session.commit()
        return jsonify(new_user.serialize()),201


@api.route('user/login', methods=['POST'])
def login():
    body=request.get_json()
    user=db.session.query(User).filter(User.email==body['email']).first()
    token = user(body)
    if user.password == body['password']:
        access_token=create_access_token(identity={'id':user.id})
        return jsonify({'token':access_token}),200
    else:
        return jsonify("error user not exist"),401

 

@api.route('/private',methods=["GET"])
@jwt_required()
def private():
    user_token=get_jwt_identity()
    print(user_token)
    user=User.query.get(user_token)
    return jsonify(user.serialize()),200