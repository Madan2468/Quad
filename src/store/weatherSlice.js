// src/store/weatherSlice.js
import { createSlice } from '@reduxjs/toolkit';

const weatherSlice = createSlice({
  name: 'weather',
  initialState: { data: null },  // Ensure data is initialized as null
  reducers: {
    setWeatherData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setWeatherData } = weatherSlice.actions;

export default weatherSlice.reducer;
