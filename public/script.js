async function getWeather() {
  const location = document.getElementById("locationInput").value;

  if (!location) {
    alert("Enter city name");
    return;
  }

  try {
    const res = await fetch(`/api/weather?city=${location}`);
    const data = await res.json();

    const pm25 = data.current.air_quality.pm2_5;
    const indianAQI = getIndianAQI(pm25);

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
      `${indianAQI.aqi} (${indianAQI.label})`;
;

  } catch {
    alert("City not found");
  }
}

function getIndianAQI(pm25) {
  if (pm25 <= 30) return { aqi: 50, label: "Good 😊" };
  if (pm25 <= 60) return { aqi: 100, label: "Satisfactory 🙂" };
  if (pm25 <= 90) return { aqi: 200, label: "Moderate 😐" };
  if (pm25 <= 120) return { aqi: 300, label: "Poor 😷" };
  if (pm25 <= 250) return { aqi: 400, label: "Very Poor ☠️" };
  return { aqi: 500, label: "Severe ☢️" };
}


document.querySelector("#search").addEventListener("click", getWeather);

document.getElementById('locationInput').addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
        getWeather();
    }
    });