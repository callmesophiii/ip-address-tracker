# IP-Address-Tracker 🌐📍

This is a solution to the [IP Address Tracker Challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). The project allows users to search for IP addresses or domains and view their geolocation data on an interactive map.

## 📑 Table of Contents

- [Overview](#overview)
  - [Features](#features)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Tech Stack](#techstack)
- [Development Reflection](#development-reflection)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## 🔍 Overview
The IP Address Tracker is a React and TypeScript web app that allows users to look up the geolocation details of any IP address or domain. On initial load, the app automatically detects the user’s IP and shows their location on an interactive Leaflet map. Users can then enter an IP or domain to view corresponding geolocation data such as location, timezone, and ISP.

### Features

- View your own IP address and location on initial load
- Search for any IP address or domain
- Display IP info: location, timezone, and ISP
- See interactive map updates (Leaflet)
- Responsive design for desktop and mobile devices

### Screenshot
See tracker.png.

### Links

- 🔗 Solution URL: [GitHub Repository](https://github.com/yourusername/ip-address-tracker)
- 🌐 Live Site URL: [Live Demo](https://vercel.com/callmesophiiis-projects/ip-address-tracker)

### 🛠️ Tech Stack

- React + TypeScript
- Vite
- Leaflet & React-Leaflet
- IPify API for Geolocation
- CSS

## 🧠 Development Reflection

Building the IP Address Tracker project was an excellent opportunity to deepen my understanding of asynchronous JavaScript, API integration, and interactive user interface development using LeafletJS. From the start, the project challenged me to think critically about how to structure API calls and update the user interface in real-time based on user input and external data.

One of the key challenges I faced was managing the dynamic updates of the Leaflet map. Initially, the map wouldn’t re-center or update the marker correctly when a new IP address or domain was entered. This led me to refactor my code and separate the map initialization from the marker update logic. By modularizing these functions, I was able to ensure that the map behaved consistently across different user interactions.

Another significant obstacle was error handling. I needed to account for invalid IP addresses, domains, and potential network errors. Implementing user-friendly messages and fallback behaviors helped enhance the reliability and usability of the app.

Looking ahead, there are several improvements I’d like to implement. Adding a loading spinner and validating inputs in real-time would provide better feedback to users. I’m also interested in storing a search history and refactoring the current codebase to reduce repetitive DOM manipulation by abstracting common tasks into utility functions.

Overall, this project was an insightful exercise in frontend development that strengthened my confidence in working with APIs, maps, and responsive web applications.


## 👤 Author

- GitHub – [@callmesophiii](https://github.com/callmesophiii)
- Frontend Mentor – [@callmesophiii](https://www.frontendmentor.io/profile/callmesophiii)
  

## 🙌 Acknowledgments

Thanks to:
- [Frontend Mentor](https://www.frontendmentor.io) for the challenge idea.
- [IPify](https://geo.ipify.org) for the Geolocation API.
- [LeafletJS](https://leafletjs.com) for the powerful and open-source map tool.
- All my fellow learners who collaborated in break out groups to give each other pointers and kept each other on the right track!

This project was completed independently as part of a learning initiative to build real-world projects using modern frontend tools.
