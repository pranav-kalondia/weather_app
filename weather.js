const apikey = "91a4045d497a32c48fba7c3c1873ef75";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox = document.querySelector(".bar");
const searchbtn = document.querySelector(".btn");
const weathericon = document.querySelector(".weather");

async function checkweather(city) {
  const Response = await fetch(apiurl + city + `&appid=${apikey}`);
  var data = await Response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humitext").innerHTML = data.main.humidity + " %";
  document.querySelector(".windtext").innerHTML = data.wind.speed + " Km/hr";

  if (data.weather[0].main == "clouds") {
    weathericon.src = "clouds.png";
  } else if (data.weather[0].main == "clear") {
    weathericon.src = "clear.png";
  } else if (data.weather[0].main == "rain") {
    weathericon.src = "rain.png";
  } else if (data.weather[0].main == "drizzle") {
    weathericon.src = "drizzle.png";
  } else if (data.weather[0].main == "mist") {
    weathericon.src = "mist.png";
  }
}

searchbtn.addEventListener("click", () => {
  checkweather(searchbox.value);
});