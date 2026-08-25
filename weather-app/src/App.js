import React, { useState, useEffect } from 'react';
import WeatherDetails from './WeatherDetails'; // We'll create this later

function App() {
  const [weatherData, setWeatherData] = useState(null); // State to store weather data
  const [loading, setLoading] = useState(true); // State to manage loading
  const city = 'London'; // You can change this to any city or make it dynamic later

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true); // Set loading to true while fetching data
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b995bf7468fe3e095f90519b6c55e2f6`
        );
        const data = await response.json();
        setWeatherData(data); // Save the fetched data
        setLoading(false); // Stop loading once data is fetched
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setLoading(false);
      }
    };

    fetchWeather(); // Call the function to fetch data
  }, [city]); // Re-run whenever city changes (we'll make this dynamic later)

  return (
    <div>
      <h1>Weather App</h1>
      {loading ? <p>Loading...</p> : <WeatherDetails data={weatherData} />}
    </div>
  );
}

export default App;
