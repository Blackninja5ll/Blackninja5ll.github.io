const apiKey = "ec6b5dbeb73ed11480fd497a5d34d81b"; // replace with your actual key
const city = "Stockholm";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(url)
  .then(response => response.json()) // get the JSON out of the response
  .then(data => {
    console.log(data); // See all the weather info
    console.log("Temperature:", data.main.temp + "°C");
    console.log("Weather:", data.weather[0].description);
  })
  .catch(error => {
    console.error("Error fetching the weather data:", error);
  });
