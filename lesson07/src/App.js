import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './component/Header/Header';
import Homepage from './component/Homepage/Homepage';
import Cart from './component/Cart/Cart';

const App = () => {
  const [count, setCount] = useState([]);
  const [chosenProduct, setChosenProduct] = useState(null);
  useEffect(() => {
    fetch("https://64a39761c3b509573b564b91.mockapi.io/products")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((res) => {
        setCount(res);
      });
  }, []);
  console.log(count);

  return(
    <div className="AppForm">
      <Header count={count} />
      <Homepage setCount={setCount} count={count}  setChosenProduct={setChosenProduct} chosenProduct={chosenProduct}/>
      <Cart />
    </div>
  );  
};

export default App;