import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import All from './component/All';
import Active from './component/Active';
import Completed from './component/Completed';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [taskText, setTaskText] = useState('');


  const addTask = (updatedTasks) => {
    setTasks(updatedTasks);
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const filterTasks = () => {
    if (activeFilter === 'active') {
      return tasks.filter(task => !task.completed);
    } else if (activeFilter === 'complete') {
      return tasks.filter(task => task.completed);
    }
    return tasks;
  };

  const deleteCompletedTasks = () => {
    const remainingTasks = tasks.filter(task => !task.completed);
    setTasks(remainingTasks);
  };

  const deleteAllCompletedTasks = () => {
    const activeTasks = tasks.filter(task => !task.completed);
    setTasks(activeTasks);
  };


  const handleTaskSelection = (index) => {
    if (activeFilter === 'active') {
      if (selectedTasks.includes(index)) {
        setSelectedTasks(selectedTasks.filter(taskIndex => taskIndex !== index));
      } else {
        setSelectedTasks([...selectedTasks, index]);
      }
    }
  };

  const addTaskToCompleted = (task) => {
    task.completed = true; 
    setTasks([...tasks, task]);
  };

  const addTaskToAll = (task) => {
    task.completed = false; 
    setTasks([...tasks, task]);
  };

  return (
    <Router>
      <div className="container">
        <h1>#todo</h1>

        <div className="topic">
          <label>
            <Link className="link" to="/all">All</Link>
          </label>
          <label>
            <Link className="link" to="/active">Active</Link>
          </label>
          <label>
            <Link className="link" to="/complete">Completed</Link>
          </label>
          {activeFilter === 'complete' && <button onClick={deleteCompletedTasks}>Delete All</button>}
        </div>

        <Routes>
          <Route
            path="/all"
            element={<All tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} addTaskToCompleted={addTaskToCompleted} />}
          />
          <Route
            path="/active"
            element={<Active 
              tasks={filterTasks()}
              toggleTaskCompletion={toggleTaskCompletion}
              addTask={addTask}
              selectedTasks={selectedTasks}
              handleTaskSelection={handleTaskSelection}
              taskText={taskText} 
              setTaskText={setTaskText}
              addTaskToAll={addTaskToAll}
              />}
          />
          <Route path="/completed" element={<Completed tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} deleteAllCompletedTasks={deleteAllCompletedTasks}/>} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;

