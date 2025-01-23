import { useSelector } from 'react-redux';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks); // Getting tasks from the Redux store

  // Ensure tasks is an array
  if (!Array.isArray(tasks)) {
    return <div>No tasks available</div>; // Optionally handle the case where tasks is not an array
  }

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
