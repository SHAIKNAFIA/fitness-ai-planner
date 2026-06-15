from ai.gemini_model import generate_plan


def workout_recommendation(user):

    prompt = f"""
    Create a personalized 7-day workout plan.

    User:
    Age: {user.age}
    Height: {user.height} cm
    Weight: {user.weight} kg
    Goal: {user.goal}

    Rules:
    - Keep response under 300 words
    - Give Day 1 to Day 7 only
    - Use bullet points
    - No introduction
    - No conclusion
    - No warnings
    """

    return generate_plan(prompt)


def diet_recommendation(user):

    prompt = f"""
    Create a personalized Indian diet plan.

    User:
    Age: {user.age}
    Height: {user.height} cm
    Weight: {user.weight} kg
    Goal: {user.goal}
    Food Preference: {user.food_preference}
    Budget: {user.budget}

    Rules:
    - Breakfast
    - Lunch
    - Dinner
    - Snacks
    - Budget friendly
    - Indian foods only
    - Under 200 words
    - No introduction
    - No conclusion
    """

    return generate_plan(prompt)