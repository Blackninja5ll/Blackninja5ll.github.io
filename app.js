const apiKey = "ea72898441976fbdf665321ee6e2be73"; // put your real API key here

// Step 1: Get user's location
navigator.geolocation.getCurrentPosition(
  (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    console.log("Your location:", lat, lon);

    // Step 2: Fetch weather for that location
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

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
  },
  (error) => {
    console.error("Error getting location:", error);
  }
);
