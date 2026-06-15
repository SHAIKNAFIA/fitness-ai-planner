from database.db import db

class Diet(db.Model):

    __tablename__ = "diets"

    id = db.Column(db.Integer, primary_key=True)

    user_id = db.Column(db.Integer)

    diet_plan = db.Column(db.Text)