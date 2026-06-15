from flask import Blueprint, jsonify

from models.user import User
from models.workout import Workout

from database.db import db

from services.recommendation_service import (
    workout_recommendation
)

workout_bp = Blueprint(
    "workout",
    __name__
)


@workout_bp.route(
    "/generate/<int:user_id>"
)
def generate_workout(user_id):

    user = User.query.get(user_id)

    if not user:
        return jsonify({
            "message": "User not found"
        }), 404

    result = workout_recommendation(user)

    workout = Workout(
        user_id=user.id,
        workout_plan=str(result)
    )

    db.session.add(workout)
    db.session.commit()

    return jsonify({
    "plan": result
})