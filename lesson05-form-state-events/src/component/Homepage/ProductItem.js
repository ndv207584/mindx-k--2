import React from 'react';
import './Homepage.css';

const ProductItem = ({ index = 1, onClick, name, price, discount }) => {
  return (
    <div className="ProductItem">
      <div className="ProductItemContent">
            <img
                alt="crypto"
                src={`https://source.unsplash.com/random/?Cryptocurrency&${index}`}
                className="ProductPic"
                width = "200"
                height = "200" 
            ></img>
            <h2 className="ProductName">{name}</h2>
            <h3 className="ProductPrice">{price}$</h3>
            <h3 className="ProductDiscount">{discount}% off</h3>
            <button className="Button" onClick={onClick}>
              <p className="ButtonText">Add to cart</p>
            </button>
      </div>
    </div>
  );
};

export default ProductItem;