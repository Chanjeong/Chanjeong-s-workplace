async function searchLocation() {
  const typeInput = document.getElementById("location");
  const weatherInfo = document.getElementById("weather-information");
  const loading = document.getElementById("loading");

  loading.style.display = "block";

  try {
    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=279d247b86524368b3f81431242101&q=${typeInput.value}`,
      { mode: "cors" }
    );
    const weatherdata = await response.json();
    console.log(weatherdata);
    if (!typeInput.value) {
      alert("Please type the location");
    }
    if (!response.ok) {
      throw new Error(
        `Failed to fetch Weather Inforamtion. Status: ${response.status}`
      );
    }
    if (
      weatherdata.current &&
      weatherdata.current.condition &&
      weatherdata.current.temp_c &&
      weatherdata.location &&
      weatherdata.location.name
    ) {
      weatherInfo.innerHTML = `
    <div><h1>${weatherdata.location.country}, ${weatherdata.location.name}</h1></div>
    <div><h3>Condition: ${weatherdata.current.condition.text}<img src=""></h3> </div>
    <div><h3>Tempature: ${weatherdata.current.temp_c}°C</h3></div>
    <div><h3>Feelslike Temperature: ${weatherdata.current.feelslike_c}°C</h3></div>
    <div><h3>UV: ${weatherdata.current.uv}</h3></div> 
    <div><h3>Humidity: ${weatherdata.current.humidity}%</h3></div>
    <div><h3>Last Updated: ${weatherdata.current.last_updated}</h3></div>
    `;
      const img = document.querySelector("img");
      img.src = "https:" + weatherdata.current.condition.icon;

      loading.style.display = "none";
    }
  } catch (error) {
    alert(error);
  }
}
