import React from 'react';

const CartItem = ({ index = 1 }) => {
  return (
    <div className="CartItem">
      <div className="CartContent">
        <img
          alt="crypto"
          src={`https://source.unsplash.com/random/?Cryptocurrency&${index}`}
          className="CartPic"
          width = "200"
          height = "200"
        ></img>
      </div>
      <div className=''></div>
      <h2 className="CartName">Adidas</h2>
      <h3 className="CartPrice">120$</h3>
      <h3 className="CartDiscount">50% off</h3>
    </div>
  );
};

export default CartItem;