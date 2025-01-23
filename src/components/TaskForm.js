import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/taskSlice'; // Assuming you have a Redux slice for tasks

const TaskForm = () => {
  const [task, setTask] = useState('');
  const [priority, setPriority] = useState('medium'); // Default priority
  const dispatch = useDispatch();

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    if (!task) return;
    
    // Dispatch action to add task (assuming Redux)
    dispatch(addTask({ task, priority }));

    // Clear input fields after adding task
    setTask('');
    setPriority('medium');
  };

  return (
    <form onSubmit={handleTaskSubmit} className="task-form">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
        className="task-input"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="priority-select"
      >
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <button type="submit" className="add-task-button">Add Task</button>
    </form>
  );
};

export default TaskForm;
