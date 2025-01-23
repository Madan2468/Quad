// src/slices/taskSlice.js
import { createSlice } from '@reduxjs/toolkit';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],  // Initial state should be an empty array
  reducers: {
    setTasks: (state, action) => {
      return action.payload;
    },
    addTask: (state, action) => {
      state.push(action.payload);
    },
    // Add other reducers as needed
  },
});

export const { setTasks, addTask } = taskSlice.actions;
export default taskSlice.reducer;
