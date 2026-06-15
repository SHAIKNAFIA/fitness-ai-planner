from flask import Blueprint, jsonify

from models.user import User
from models.diet import Diet

from database.db import db

from services.recommendation_service import (
    diet_recommendation
)

diet_bp = Blueprint(
    "diet",
    __name__
)


@diet_bp.route(
    "/generate/<int:user_id>"
)
def generate_diet(user_id):

    user = User.query.get(user_id)

    if not user:
        return jsonify({
            "message": "User not found"
        }), 404

    result = diet_recommendation(user)

    diet = Diet(
        user_id=user.id,
        diet_plan=str(result)
    )

    db.session.add(diet)
    db.session.commit()

    return jsonify({
    "plan": result
})