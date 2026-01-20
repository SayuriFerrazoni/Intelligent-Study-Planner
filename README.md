# Intelligent-Study-Planner
An intelligent study planner that uses rule-based scheduling to generate daily study schedules based on missed days and deadlines.

## Table of Contents

- [Overview](#overview)
- [The Idea](#the-idea)
- [Screenshot](#screenshot)
- [How The Planner Works](#how-the-planner-works)
- [Built with](#built-with)
- [How to Run the Project Locally](#how-to-run-the-project-locally)
- [What I Learned](#what-i-learned)
- [Useful Resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

This Intelligent Study Planner is a full-stack web application created to aid students in organizing their study time efficiently. Instead of following a fixed schedule, the planner adapts to changing deadlines and missed days.

Students are able to add more than one subject or course, assign different difficulty levels that range from 1 to 3, and assign deadlines.
Based on the information provided by the user, the system generates a daily study plan and fixes future days when necessary if a day is missed.

## The Idea

- Add more than one subject or course with different difficulties and deadlines
- Create daily study plans based on the information received
- Fix the schedule when a day is missed by the student

## Screenshot


## How The Planner Works

The planner analyzes:
- The difficulty of each subject or course
- The days remaining until the deadlines
- The number of hours available per day

That means that the subjects that are more difficult or with a closer deadline receive more study time. Also, when a day is missed by the student, the planner recalculates the schedule so the next days compensate for the study time that was lost.

## Built With

- Python (Flask)
- JavaScript
- HTML
- CSS

## How to Run the Project Locally

### Backend
cd backend
pip install flask flask-cors
python app.py

## What I Learned

- How to transform deadlines, difficulty levels, and missed study days into a clear program.
- How to build a full-stack application with both frontend and backend.
- How to build a program using Flask.
  
## Useful Resources

- [Flask Documentation](https://flask.palletsprojects.com/) – Used for backend and API structure information.
- [MDN Web Docs](https://developer.mozilla.org/en-US/) – Used for JavaScript and Fetch API information.

## Author

GitHub: [SayuriFerrazoni](https://github.com/SayuriFerrazoni)

## Acknowledgments

Thanks to the open-source documentation, such as Flask and MDN documentation, which were used during the development process of this project.


