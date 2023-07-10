import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Body from './component/Body/Body';
import { useState } from 'react';


function App() {
  const [count, setCount] = useState([]);
  console.log(count);
  return (
    <div className="App">
      <Header/>
      <Body />
    </div>
  );
}

export default App;
