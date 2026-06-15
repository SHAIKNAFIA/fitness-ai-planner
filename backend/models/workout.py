from database.db import db

class Workout(db.Model):

    __tablename__ = "workouts"

    id = db.Column(db.Integer, primary_key=True)

    user_id = db.Column(db.Integer)

    workout_plan = db.Column(db.Text)