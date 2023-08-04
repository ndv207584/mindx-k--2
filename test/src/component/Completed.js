import React, { useState, useEffect } from 'react';
import './component.css';

function Completed({ tasks, toggleTaskCompletion, deleteAllCompletedTasks, addTaskToAll }) {
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    const completed = tasks.filter(task => task.completed);
    setCompletedTasks(completed);
  }, [tasks]);

  const handleTaskSelection = (index) => {
    toggleTaskCompletion(index);
  };

  const handleDeleteAll = () => {
    deleteAllCompletedTasks();
  };

  const handleAddToAll = (task) => {
    task.completed = false; 
    addTaskToAll(task);
  };

  return (
    <div>
      <h2>Completed Tasks</h2>
      <ul>
        {completedTasks.map((task, index) => (
          <li key={index} onClick={() => handleTaskSelection(index)}>
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleTaskSelection(index)}
              />
              {task.text}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleDeleteAll}>Delete All</button>

      {completedTasks.length > 0 && (
        <div>
          <h3>Add tasks back to All</h3>
          <ul>
            {completedTasks.map((task, index) => (
              <li key={index}>
                <button className="button" onClick={() => handleAddToAll(task)}>Add to All</button>
                {task.text}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Completed;