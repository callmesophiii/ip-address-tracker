const ipDisplay = document.getElementById("ip");
const locationDisplay = document.getElementById("location");
const timezoneDisplay = document.getElementById("timezone");
const ispDisplay = document.getElementById("isp");
const searchBtn = document.getElementById("search-btn");
const ipInput = document.getElementById("ip-input");

let map = L.map('map').setView([0, 0], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);
let marker = L.marker([0, 0]).addTo(map);

const API_KEY = "at_QJQE64GlJkDvl2C5bGWzHR7NNM5bD";

async function getIPData(query = '') {
  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}${query ? `&ipAddress=${query}` : ''}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    updateUI(data);
  } catch (error) {
    alert("Error fetching IP data.");
    console.error(error);
  }
}

function updateUI(data) {
  const { ip, isp, location } = data;
  ipDisplay.textContent = ip;
  ispDisplay.textContent = isp;
  locationDisplay.textContent = `${location.city}, ${location.region} ${location.postalCode}`;
  timezoneDisplay.textContent = `UTC ${location.timezone}`;
  
  const lat = location.lat;
  const lng = location.lng;
  map.setView([lat, lng], 13);
  marker.setLatLng([lat, lng]);
}

// Events
searchBtn.addEventListener("click", () => {
  const value = ipInput.value.trim();
  if (value) getIPData(value);
});

ipInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    const value = ipInput.value.trim();
    if (value) getIPData(value);
  }
});


window.addEventListener("load", () => {
  getIPData(); 
});
