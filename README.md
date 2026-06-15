# AI-Powered Personalized Workout & Diet Planner

## Overview

AI-Powered Personalized Workout & Diet Planner is a full-stack web application that generates personalized fitness and nutrition plans using Artificial Intelligence. Users can create an account, maintain their fitness profile, and receive customized workout and diet recommendations based on their goals, body metrics, and food preferences.

The application uses Google Gemini AI to generate intelligent recommendations tailored to each user.

---

## Features

### User Authentication

* User Registration
* User Login
* Secure User Management

### Profile Management

* Age
* Gender
* Height
* Weight
* Fitness Goal
* Food Preference
* Budget

### Health Analysis

* Automatic BMI Calculation
* User Health Metrics Dashboard

### AI Workout Planner

* Personalized Workout Recommendations
* Generated using Google Gemini AI
* Based on user profile and fitness goals

### AI Diet Planner

* Personalized Diet Recommendations
* Indian diet suggestions
* Budget-aware meal planning
* Generated using Google Gemini AI

### Dashboard

* User Profile Overview
* BMI Display
* Workout Plan Generator
* Diet Plan Generator
* Logout Functionality

---

## Technology Stack

### Frontend

* React.js
* Vite
* Axios
* CSS

### Backend

* Python
* Flask
* Flask-CORS
* Flask-SQLAlchemy

### Database

* SQLite

### Artificial Intelligence

* Google Gemini 2.5 Flash API

### Version Control

* Git
* GitHub

---

## Project Structure

```text
fitness-ai-planner/
│
├── backend/
│   ├── ai/
│   │   └── gemini_model.py
│   ├── config/
│   ├── database/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── app.py
│   └── requirements.txt
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── README.md
└── .gitignore
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/SHAIKNAFIA/fitness-ai-planner.git
cd fitness-ai-planner
```

---

### Backend Setup

```bash
cd backend

pip install -r requirements.txt
```

Create `.env`

```env
SECRET_KEY=your_secret_key
JWT_SECRET_KEY=your_jwt_secret
DATABASE_URL=sqlite:///fitness.db
GEMINI_API_KEY=your_gemini_api_key
```

Run Backend

```bash
python app.py
```

Backend runs on:

```text
http://127.0.0.1:5000
```

---

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

## Workflow

1. User registers an account.
2. User logs in.
3. User fills profile information.
4. BMI is calculated automatically.
5. User clicks "Generate Workout Plan".
6. Gemini AI generates a personalized workout routine.
7. User clicks "Generate Diet Plan".
8. Gemini AI generates a personalized diet plan.

---

## Future Enhancements

* Progress Tracking
* Workout History
* Diet History
* Calorie Tracking
* AI Chat Assistant
* Email Notifications
* Mobile Application
* JWT Authentication
* Cloud Database Deployment

---

## Screenshots

### Login Page

![Login Page](screenshots/login.png)

### Registration Page

![Registration Page](screenshots/register.png)


### Dashboard

![Dashboard](screenshots/dashboard.png)

### AI Workout Generator

![Workout](screenshots/workout.png)

### AI Diet Generator

![Diet](screenshots/diet.png)
---

## Author

**Shaik Nafia**

B.Tech – Artificial Intelligence & Machine Learning

GitHub:
https://github.com/SHAIKNAFIA

---

## License

This project is developed for educational and learning purposes.
