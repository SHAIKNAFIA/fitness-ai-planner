from flask import Blueprint, request, jsonify

from models.user import User
from database.db import db

from services.bmi_service import calculate_bmi

user_bp = Blueprint("user", __name__)


@user_bp.route("/profile/<int:user_id>", methods=["GET"])
def get_profile(user_id):

    user = User.query.get(user_id)

    if not user:
        return jsonify({
            "message": "User not found"
        }), 404

    bmi = None

    if user.height and user.weight:
        bmi = calculate_bmi(
            user.weight,
            user.height
        )

    return jsonify({
        "name": user.name,
        "email": user.email,
        "age": user.age,
        "gender": user.gender,
        "height": user.height,
        "weight": user.weight,
        "goal": user.goal,
        "food_preference": user.food_preference,
        "budget": user.budget,
        "bmi": bmi
    })


@user_bp.route("/profile/<int:user_id>", methods=["PUT"])
def update_profile(user_id):

    user = User.query.get(user_id)

    if not user:
        return jsonify({
            "message": "User not found"
        }), 404

    data = request.json

    user.age = data.get("age")
    user.gender = data.get("gender")
    user.height = data.get("height")
    user.weight = data.get("weight")
    user.goal = data.get("goal")
    user.food_preference = data.get("food_preference")
    user.budget = data.get("budget")

    db.session.commit()

    return jsonify({
        "message": "Profile updated"
    })


# ADMIN ROUTE TO VIEW ALL REGISTERED USERS

@user_bp.route("/admin-users-2026", methods=["GET"])
def get_all_users():

    users = User.query.all()

    return jsonify([
        {
            "id": user.id,
            "name": user.name,
            "email": user.email,
            "age": user.age,
            "gender": user.gender,
            "height": user.height,
            "weight": user.weight,
            "goal": user.goal,
            "food_preference": user.food_preference,
            "budget": user.budget
        }
        for user in users
    ])