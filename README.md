Full Stack Weather App 

Give your location to know temperature in your region


A full-stack weather application built using HTML, CSS, JavaScript, Node.js, and Express, which allows users to search weather details by city name.
The app securely fetches live weather data from WeatherAPI using a backend proxy and environment variables.

🔗 Live Demo: https://weather-app-gx7i.onrender.com/

🚀 Features

🌍 Search weather by city name

🌡️ Displays temperature, condition, humidity, wind speed & AQI

🔐 Secure API key handling using environment variables

🧊 Modern glassmorphism UI

⌨️ Supports Enter key and button click for search

⚙️ Backend acts as a secure proxy (API key never exposed)

🏗️ Tech Stack
Frontend

HTML5

CSS3 (Glassmorphism UI)

JavaScript

Backend

Node.js

Express.js

WeatherAPI (Third-party API)

Tools

Git & GitHub

Render / Vercel (Deployment)

📁 Project Structure
weather-app/
│
├── server.js
├── package.json
├── .env              # Not committed
├── .gitignore
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js

⚙️ Environment Variables

Create a .env file in the root directory:

WEATHER_API_KEY=your_weatherapi_key_here


⚠️ Never commit .env to GitHub

🧪 Run Locally
npm install
npm start


Open in browser:

http://localhost:5000

🌐 API Endpoint
GET /api/weather?city=CityName


Example:

/api/weather?city=Bengaluru

🔒 Security Best Practices Used

API key stored in environment variables

Backend proxy prevents client-side exposure

.env excluded using .gitignore

🚀 Deployment
Render

Backend and frontend served together

Environment variables configured in Render dashboard


 What I Learned

Securing API keys using environment variables

Building full-stack applications with Express

Serving frontend from backend

Handling keyboard events for better UX

Deploying full-stack apps to cloud platforms


Madan B B
B.Tech | Aspiring Full Stack Developer
