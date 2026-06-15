from flask import Blueprint
from flask import request
from flask import jsonify

from models.progress import Progress

from database.db import db

progress_bp = Blueprint(
    "progress",
    __name__
)


@progress_bp.route(
    "/add",
    methods=["POST"]
)
def add_progress():

    data = request.json

    progress = Progress(
        user_id=data["user_id"],
        weight=data["weight"],
        bmi=data["bmi"]
    )

    db.session.add(progress)
    db.session.commit()

    return jsonify({
        "message": "Progress saved"
    })


@progress_bp.route(
    "/history/<int:user_id>"
)
def get_history(user_id):

    history = Progress.query.filter_by(
        user_id=user_id
    ).all()

    result = []

    for item in history:

        result.append({
            "weight": item.weight,
            "bmi": item.bmi
        })

    return jsonify(result)