from flask import Flask
from flask_cors import CORS
from config.config import Config

from database.db import db

from routes.auth_routes import auth_bp
from routes.user_routes import user_bp
from routes.workout_routes import workout_bp
from routes.diet_routes import diet_bp
from routes.progress_routes import progress_bp

app = Flask(__name__)
CORS(app)
app.config.from_object(Config)

db.init_app(app)

app.register_blueprint(
    auth_bp,
    url_prefix="/api/auth"
)

app.register_blueprint(
    user_bp,
    url_prefix="/api/user"
)

app.register_blueprint(
    workout_bp,
    url_prefix="/api/workout"
)

app.register_blueprint(
    diet_bp,
    url_prefix="/api/diet"
)

app.register_blueprint(
    progress_bp,
    url_prefix="/api/progress"
)


with app.app_context():
    db.create_all()


@app.route("/")
def home():

    return {
        "project":
        "Personalized Workout & Diet Planner",
        "status":
        "Running"
    }


if __name__ == "__main__":
    app.run(
        debug=True
    )