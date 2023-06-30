import React, {useState} from 'react';
import ProductItem from './ProductItem';
import './Homepage.css';

const Homepage = ({ productList, setCount, count, chosenProduct, setChosenProduct }) => {
    const handleAddToCart = (chosenProduct) => {
      if(chosenProduct && !count.find((item) => item.name === chosenProduct.name)){
        setCount([...count, chosenProduct]); 
      }
    };
    return(
      <div className="HomePage">
        {productList.map((productItem) => {
          return (
            <ProductItem
              index={productItem.id}
              onClick={() => handleAddToCart(productItem)}
              name={productItem.name}
              price={productItem.price}
              discount={productItem.discount}
            />
          );
        })}
      </div>
    );
  };

export default Homepage;