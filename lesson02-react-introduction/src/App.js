import logo from './logo.svg';
import './App.css';
import Card from './Card';
// import Category from './Category';
// import Header from './Header';



// Component App
// Functional Component
const App = () => {
  return (
    // JXS: Javascript XML
    <div>
      <div className="App">
        <input type="text" placeholder="Enter your task here" className="input" />
          <Card text = "Clean up bedrrom" />
          <Card text = "Buy some milk" />
          <Card text = "Jogging" />
          <Card text = "Learn React" />
          <Card text = "Doing Exercises" />
      </div>

      <div className="AppEnd">
      <span>5 tasks left!</span> <span>MindX todolist</span>
      </div>
    </div>
  );
}

export default App;
