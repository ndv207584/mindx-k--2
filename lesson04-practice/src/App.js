import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Card } from './Card';

function App() {
  const branch = ['Adidas', 'Nike', 'Puma', 'Convert'];
  return (
    <>
      <ul className="header">
        <li>About Us</li>
        <li>Contacts</li>
        <li>Store</li>
        <li>Track Orders</li>
      </ul>

      {/* header */}
      <div className="shopAppHeader">
        <h3 className="shopApp">SHOP APP</h3>
        <h4 className="shoppApp2">Categories</h4>
        <input className="input" type="text" placeholder="Search Items" />
      </div>

      <div className="picturePart">
            <div >
              <img className="img1" src="./picture/img1.png" alt="" />
            </div>
            <div className="img2Part">
              <img className="img2" src="./picture/img2.png" alt="" />
              <img className="img2" src="./picture/img2.png" alt="" />
              <img className="img2" src="./picture/img2.png" alt="" />
            </div>
          </div>

      <div className="App">
      {/* <Card branch = "Adidas" />
      <Card branch = "Nike" />
      <Card branch = "Puma" />
      <Card branch = "Convert" /> */}
      {branch.map((branchItem) => {
        return <Card branch={branchItem} />
      })}
    </div>
    </>
  );
}

export default App;
