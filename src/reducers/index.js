// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from './weatherSlice';
import userReducer from './userSlice'; // Assuming userSlice exists for authentication state

const store = configureStore({
  reducer: {
    weather: weatherReducer,
    user: userReducer, // Add userReducer for handling login state
  },
});

export default store;
