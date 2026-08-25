import React from 'react';

function WeatherDetails({ data }) {
  if (!data || !data.main) {
    return <p>No weather data available</p>;
  }

  return (
    <div>
      <h2>Weather in {data.name}</h2>
      <p>Temperature: {Math.round(data.main.temp - 273.15)}°C</p>
      <p>Condition: {data.weather[0].description}</p>
    </div>
  );
}

export default WeatherDetails;