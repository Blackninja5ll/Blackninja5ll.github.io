const apiKey = "ea72898441976fbdf665321ee6e2be73"; // put your real API key here

let lat = null;
let lon = null;
let temp = null;
let location = null;

document.addEventListener("DOMContentLoaded", () => {
  temp = document.getElementById("temp");
  location = document.getElementById("location");
});

const getLocationByIP = () => {
  fetch("http://ipwho.is/")
    .then((res) => res.json())
    .then((res) => {
      lat = res.latitude;
      lon = res.longitude;
      checkWeather();
    });
}

const getLocationByGPS = () => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      checkWeather();
    },
    (error) => {
      console.error("Error getting location:", error);
    }
  );
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

getLocationByIP();