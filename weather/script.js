const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0aa53f17f8mshcaf9cf732643888p15bda1jsn969e22eed984",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.getElementById("cloud_pct").innerHTML = data.cloud_pct;
      document.getElementById("feels_like").innerHTML = data.feels_like;
      document.getElementById("temp").innerHTML = data.temp;
      document.getElementById("humidity").innerHTML = data.humidity;
      document.getElementById("min_temp").innerHTML = data.min_temp;
      document.getElementById("max_temp").innerHTML = data.max_temp;
      document.getElementById("wind_speed").innerHTML = data.wind_speed;
      // document.getElementById("wind_degrees").innerHTML = data.wind_degrees;
      document.getElementById("sunrise").innerHTML = data.sunrise;
      document.getElementById("sunset").innerHTML = data.sunset;
    })
    .catch((err) => console.error(err));
}

const submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const cityInput = document.getElementById("city");
  getWeather(cityInput.value);
});

getWeather("kota");
