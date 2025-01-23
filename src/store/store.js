import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import taskReducer from './taskSlice';
import weatherReducer from './weatherSlice';
const store = configureStore({
  reducer: {
    user: userReducer,
    tasks: taskReducer,
    weather: weatherReducer
  },
});

export default store;
