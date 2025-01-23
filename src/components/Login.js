import React, { useState } from 'react';
import './Login.css'; // Ensure this is the correct path to your CSS file
import '../App.css'; // import './App.css'; from '../App';
const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (username) {
      onLogin(); // Call the onLogin function passed from App.js
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLoginSubmit}>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="login-input"
        />
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
