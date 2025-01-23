import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TaskForm from './components/TaskForm'; // Form for adding tasks
import TaskList from './components/TaskList'; // List of tasks
import Login from './components/Login'; // Login component
import { setUserLoggedIn } from './store/userSlice'; // Assuming userSlice for login state
import WeatherInfo from './components/WeatherInfo'; // WeatherInfo component
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user); // user state from Redux
  const [taskLocation, setTaskLocation] = useState('');
  const [weatherLocation, setWeatherLocation] = useState(''); // New state for weather location

  // Handle login (for demonstration purposes)
  const handleLogin = () => {
    // Set user logged in using Redux (or from localStorage, etc.)
    dispatch(setUserLoggedIn({ isAuthenticated: true }));
  };

  const handleWeatherLocationChange = (e) => {
    setWeatherLocation(e.target.value); // Update the location for weather info
  };

  return (
    <div className="App">
      {!user.isAuthenticated ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div>
          <h1>Welcome back! Add your tasks</h1>
          <TaskForm />
          <TaskList />

          {/* Weather section */}
          <div className="weather-section">
            <h2>Weather Information</h2>
            <input
              type="text"
              placeholder="Enter city name"
              value={weatherLocation}
              onChange={handleWeatherLocationChange}
            />
            {/* WeatherInfo component to display weather data */}
            <WeatherInfo location={weatherLocation} />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
