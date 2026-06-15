from flask import Blueprint, request, jsonify
from flask_bcrypt import Bcrypt

from models.user import User
from database.db import db

auth_bp = Blueprint("auth", __name__)

bcrypt = Bcrypt()


@auth_bp.route("/register", methods=["POST"])
def register():

    data = request.json

    existing_user = User.query.filter_by(
        email=data["email"]
    ).first()

    if existing_user:
        return jsonify({
            "message": "Email already exists"
        }), 400

    hashed_password = bcrypt.generate_password_hash(
        data["password"]
    ).decode("utf-8")

    user = User(
        name=data["name"],
        email=data["email"],
        password=hashed_password
    )

    db.session.add(user)
    db.session.commit()

    return jsonify({
        "message": "Registration successful"
    }), 201


@auth_bp.route("/login", methods=["POST"])
def login():

    data = request.json

    user = User.query.filter_by(
        email=data["email"]
    ).first()

    if not user:
        return jsonify({
            "message": "User not found"
        }), 404

    if not bcrypt.check_password_hash(
        user.password,
        data["password"]
    ):
        return jsonify({
            "message": "Invalid password"
        }), 401

    return jsonify({
        "message": "Login successful",
        "user_id": user.id
    })