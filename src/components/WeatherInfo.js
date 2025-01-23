import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setWeatherData } from '../store/weatherSlice';

const WeatherInfo = ({ location }) => {
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);

  useEffect(() => {
    if (location) {
      fetchWeatherData(location);
    }
  }, [location]);

  const fetchWeatherData = async (location) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=ca95e6ce9b459bff8f5dfa32980e3474&units=metric`
      );
      const data = await response.json();
      dispatch(setWeatherData(data));
    } catch (err) {
      console.error('Failed to fetch weather data', err);
    }
  };

  // Safely destructure weather data
  if (!weather || !weather.data) {
    return <p>Loading weather...</p>;
  }

  const { name, weather: weatherDetails, main } = weather.data;

  // Safeguard access to weatherDetails[0]
  const description = weatherDetails?.[0]?.description || 'No description available';

  return (
    <div>
      <h3>{name || 'Unknown location'}</h3>
      <p>{description}</p>
      <p>Temperature: {main?.temp ? `${main.temp}°C` : 'Temperature unavailable'}</p>
    </div>
  );
};

export default WeatherInfo;


