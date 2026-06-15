from database.db import db

class Progress(db.Model):

    __tablename__ = "progress"

    id = db.Column(db.Integer, primary_key=True)

    user_id = db.Column(db.Integer)

    weight = db.Column(db.Float)

    bmi = db.Column(db.Float)