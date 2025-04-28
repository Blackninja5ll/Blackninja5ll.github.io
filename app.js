const apiKey = "ea72898441976fbdf665321ee6e2be73"; // put your real API key here

let loaded = false;

document.addEventListener("DOMContentLoaded", () => {
  loaded = true;
});

const startChecker = () => {
  if(loaded) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
  
        console.log("Your location:", lat, lon);
  
        setInterval(() => {
          checkWeather(lat, lon);
        }, 5000);
      },
      (error) => {
        console.error("Error getting location:", error);
      }
    );
  }
}

const checkWeather = (lat, lon) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=se`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log("Weather Data:", data);
      console.log("Temperature:", data.main.temp + "°C");
      console.log("Weather:", data.weather[0].description);
    })
    .catch(error => {
      console.error("Error fetching weather data:", error);
    });
}