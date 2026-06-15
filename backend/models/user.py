from database.db import db

class User(db.Model):

    __tablename__ = "users"

    id = db.Column(db.Integer, primary_key=True)

    name = db.Column(db.String(100))

    email = db.Column(db.String(100), unique=True)

    password = db.Column(db.String(255))

    age = db.Column(db.Integer)

    gender = db.Column(db.String(20))

    height = db.Column(db.Float)

    weight = db.Column(db.Float)

    goal = db.Column(db.String(50))

    food_preference = db.Column(db.String(50))

    budget = db.Column(db.String(50))

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "email": self.email,
            "age": self.age,
            "gender": self.gender,
            "height": self.height,
            "weight": self.weight,
            "goal": self.goal,
            "food_preference": self.food_preference,
            "budget": self.budget
        }