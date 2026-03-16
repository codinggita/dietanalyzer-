🥗 FitLife AI – Diet Analyzer & Fitness Progress Tracker

A full-stack health platform that analyzes user body data, provides personalized diet and workout plans, and tracks fitness progress over time.

The goal of this project is to solve a real-world health problem. Many people today struggle with obesity, poor diet habits, or lack of fitness guidance. This platform works like a digital fitness coach that analyzes body metrics and helps users improve their health step-by-step.

🚀 Features
👤 User Authentication

Signup and Login system

Password validation

Protected routes

Authentication state management

📊 Health Profile Analysis

Users provide:

Age

Height

Weight

Gender

Activity level

Fitness goal

The system calculates:

BMI

Body category (underweight / normal / overweight / obese)

Recommended calorie intake

🥗 Personalized Diet Plan

Based on user goals:

Weight Loss

Calorie deficit

High protein diet

Muscle Gain

High protein + carbs

Underweight

Calorie surplus diet

Each plan includes:

Breakfast

Lunch

Dinner

Snacks

Calories and nutrition information

🏋️ Workout Recommendation System

Example workouts:

Fat Loss

Walking

HIIT

Bodyweight exercises

Muscle Gain

Pushups

Squats

Strength training

Each workout includes:

Exercise name

Sets

Reps

Duration

Difficulty level

📈 Progress Tracking Dashboard

Users can track:

Daily weight

Calories consumed

Workout completion

Water intake

The dashboard shows:

Weight progress charts

Fitness analytics

Goal completion percentage

Example:

Start Weight: 80kg
Current Weight: 74kg
Goal Weight: 70kg

Progress: 50%
🔥 Motivation System

To keep users consistent:

Workout streak tracking

Progress percentage

Health score

Motivational messages

Example messages:

"You improved 25% toward your goal."

"Keep going! Only 15 days left."

🛠 Tech Stack
Frontend

ReactJS

Tailwind CSS

React Router

React Hooks

Hooks used:

useState

useEffect

useRef

useContext

Backend

Node.js

Express.js

REST API architecture

Database

MongoDB

Mongoose ODM

⚙️ Mandatory Full Stack Features

This project includes all modern full-stack requirements.

Routing & Navigation

Client side routing using React Router

Pages include:

Home
Login
Signup
Dashboard
Profile
Diet Plan
Workout Plan
Progress Analytics

Global State Management

Using:

Context API

Used for:

Authentication state

User profile data

Theme preference

CRUD Operations

The application supports:

Create

Read

Update

Delete

For:

User profiles

Progress logs

Diet plans

Workout plans

Search, Filter & Sorting

Features include:

Search exercises

Filter workouts

Sort progress logs

Debouncing

Debouncing is implemented in:

Search bars

API calls during typing

Pagination

Pagination is implemented for:

Progress logs

Diet plans

Workout lists

Using:

MongoDB limit and skip

Form Handling & Validation

All forms include:

Input validation

Error messages

Controlled components

Examples:

Email validation

Password rules

Required fields

Dark Mode / Light Mode

Theme system includes:

Toggle switch

Theme stored in LocalStorage

Responsive UI

Built using Tailwind CSS

Supports:

Desktop

Tablet

Mobile devices

Error Handling

Backend:

Proper API responses

Try-catch blocks

Frontend:

Error messages

Loading states

🗂 Project Structure
FitLife-AI
│
├── frontend
│   ├── components
│   ├── pages
│   ├── hooks
│   ├── context
│   ├── services
│   └── utils
│
├── backend
│   ├── controllers
│   ├── routes
│   ├── models
│   ├── middlewares
│   └── services
📦 Installation
Clone the repository
git clone https://github.com/yourusername/fitlife-ai.git
Install dependencies

Frontend

cd frontend
npm install

Backend

cd backend
npm install
Run the project

Backend

npm run dev

Frontend

npm run dev
📊 Future Improvements

Possible upgrades:

AI health assistant

Food image recognition

Sleep tracking

Smart meal planner

Mobile app version

🎯 Project Goal

The goal of this project is to create a modern full-stack fitness platform that helps users:

analyze their body metrics

receive personalized diet plans

follow workout routines

track their health progress

stay motivated toward a healthier lifestyle

👨‍💻 Author

Kshitij Pandey

Full Stack Developer