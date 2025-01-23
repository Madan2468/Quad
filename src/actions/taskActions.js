export const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: task
});

export const deleteTask = (taskId) => ({
  type: 'DELETE_TASK',
  payload: taskId
});

export const setTasks = (tasks) => ({
  type: 'SET_TASKS',
  payload: tasks
});
