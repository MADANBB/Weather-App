async function getWeather() {
  const location = document.getElementById("locationInput").value;

  if (!location) {
    alert("Enter city name");
    return;
  }

  try {
    const res = await fetch(`/api/weather?city=${location}`);
    const data = await res.json();

    document.getElementById("weatherCard").style.display = "block";
    document.getElementById("city").innerText =
      `${data.location.name}, ${data.location.country}`;
    document.getElementById("temp").innerText =
      `${data.current.temp_c}°C`;
    document.getElementById("condition").innerText =
      data.current.condition.text;
    document.getElementById("icon").src =
      "https:" + data.current.condition.icon;
    document.getElementById("feels").innerText =
      `${data.current.feelslike_c}°C`;
    document.getElementById("humidity").innerText =
      `${data.current.humidity}%`;
    document.getElementById("wind").innerText =
      `${data.current.wind_kph} km/h`;
    document.getElementById("aqi").innerText =
      data.current.air_quality["us-epa-index"];

  } catch {
    alert("City not found");
  }
}

document.querySelector("#search").addEventListener("click", getWeather);

document.getElementById('locationInput').addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
        getWeather();
    }
    });