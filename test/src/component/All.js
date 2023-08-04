import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './component.css';


function All({ tasks, toggleTaskCompletion, addTaskToCompleted }) {
  const [taskText, setTaskText] = useState('');
  const [selectedTasks, setSelectedTasks] = useState([]);
  const navigate = useNavigate();

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addNewTask();
    }
  };

  const addNewTask = () => {
    if (taskText.trim() !== '') {
      const newTask = {
        text: taskText,
        completed: false,
      };
      setTaskText('');
      tasks.push(newTask);
    }
  };

  const handleTaskSelection = (index) => {
    if (selectedTasks.includes(index)) {
      setSelectedTasks(selectedTasks.filter((taskIndex) => taskIndex !== index));
    } else {
      setSelectedTasks([...selectedTasks, index]);
    }
  };

  const moveToCompleted = () => {
    selectedTasks.forEach((index) => {
      const selectedTask = tasks[index];
      selectedTask.completed = false;
      addTaskToCompleted(selectedTask);
    });

    setSelectedTasks([]);
    navigate('/completed');
  };

  return (
    <div className="form">
      <div className="input1">
        <input
          className="input"
          type="text"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter new task..."
        />
        <button className="button" onClick={addNewTask}>Add Task</button>
      </div>

      <ul>
        {tasks.map((task, index) => (
          <li key={index} onClick={() => handleTaskSelection(index)}>
            <label>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompletion(index)}
              />
              {task.text}
            </label>
          </li>
        ))}
      </ul>

      {selectedTasks.length > 0 && (
        <div>
          <p>Selected Tasks:</p>
          <ul>
            {selectedTasks.map((index) => (
              <li key={index}>
                <label>
                  <input
                    type="checkbox"
                    checked={tasks[index].completed}
                    onChange={() => handleTaskSelection(index)}
                  />
                  {tasks[index].text}
                </label>
              </li>
            ))}
          </ul>
          <button className="button" onClick={moveToCompleted}>Add to Completed</button>
        </div>
      )}

      {/* {tasks.filter((task) => !task.completed).length === 0 && (
        <p>No active tasks. You can move to Completed.</p>
      )} */}
    </div>
  );
}

export default All;
