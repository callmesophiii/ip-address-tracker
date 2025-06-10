# IP-Address-Tracker 🌐📍

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). The project allows users to search for IP addresses or domains and view their geolocation data on an interactive map.

## 📑 Table of Contents

- [Overview](#overview)
  - [Features](#features)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
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

![App Screenshot](./images/tracker.png)

### Links

- 🔗 Solution URL: [GitHub Repository](https://github.com/yourusername/ip-address-tracker)
- 🌐 Live Site URL: [Live Demo](https://your-live-demo-url.com)

## 🛠️ Tech Stack

- React + TypeScript
- Vite (development server)
- Leaflet & React-Leaflet
- IPify API for geolocation
- CSS (or Tailwind CSS, if applicable)

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm or yarn
- IPify API key

### Installation

```bash
git clone https://github.com/yourusername/ip-address-tracker.git
cd ip-address-tracker
npm install
