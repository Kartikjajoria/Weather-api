const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'b9e5983b6fmsh4f1c0df0ef1fc9bp1c5b22jsn08c62870fddb',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};
  const cityName = document.getElementById('cityName');
  const getWeather = (city)=>{
  cityName.innerHTML = city
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city,options)
  .then(response => response.json())
  .then((response) => {
    console.log(response)
    cloud_pct.innerHTML = response.cloud_pct
    temp.innerHTML = response.temp
    temp2.innerHTML = response.temp
    feels_like.innerHTML = response.feels_like
    humidity.innerHTML = response.humidity
    humidity2.innerHTML = response.humidity
    min_temp.innerHTML = response.min_temp
    max_temp.innerHTML = response.max_tempz
    wind_speed.innerHTML = response.wind_speed
    wind_speed2.innerHTML = response.wind_speed
    wind_degrees.innerHTML = response.wind_degrees
    sunrise.innerHTML = response.sunrise
    sunset.innerHTML = response.sunset
  })
  .catch(err => console.error(err));
 }
 document.addEventListener("DOMContentLoaded", function() {
  const submit = document.getElementById("submit");
  const city = document.getElementById("city")
  submit.addEventListener("click", function(e) {
    e.preventDefault();
    getWeather(city.value)
  });
});
 getWeather("Delhi")