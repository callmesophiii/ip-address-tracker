## 🧠 Development Reflection

Building the IP Address Tracker project was an excellent opportunity to deepen my understanding of asynchronous JavaScript, API integration, and interactive user interface development using LeafletJS. From the start, the project challenged me to think critically about how to structure API calls and update the user interface in real-time based on user input and external data.

One of the key challenges I faced was managing the dynamic updates of the Leaflet map. Initially, the map wouldn’t re-center or update the marker correctly when a new IP address or domain was entered. This led me to refactor my code and separate the map initialization from the marker update logic. By modularizing these functions, I was able to ensure that the map behaved consistently across different user interactions.

Another significant obstacle was error handling. I needed to account for invalid IP addresses, domains, and potential network errors. Implementing user-friendly messages and fallback behaviors helped enhance the reliability and usability of the app.

Looking ahead, there are several improvements I’d like to implement. Adding a loading spinner and validating inputs in real-time would provide better feedback to users. I’m also interested in storing a search history and refactoring the current codebase to reduce repetitive DOM manipulation by abstracting common tasks into utility functions.

Overall, this project was an insightful exercise in frontend development that strengthened my confidence in working with APIs, maps, and responsive web applications.
