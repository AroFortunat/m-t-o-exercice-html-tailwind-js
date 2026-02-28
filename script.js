const API_KEY = "67e3cd7b5c09589d975c9c8443263bb6";
const URL = `https://api.openweathermap.org/data/2.5/weather?q=Antananarivo&appid=${API_KEY}`;
fetch(URL)
  .then((response) => response.json())
  .then((data) => console.log(data));
