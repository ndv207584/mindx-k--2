import React, {useState} from 'react';
import ProductItem from './ProductItem';
import './Homepage.css';

const Homepage = ({setCount, count, chosenProduct, setChosenProduct }) => {
    const handleAddToCart = (chosenProduct) => {
      if(chosenProduct && !count.find((item) => item.id === chosenProduct.id)){
        setCount([...count, chosenProduct]); 
      }
    };
    const removeCart = (deletecart) => {
      const deleteCart = count.filter((productItem) => productItem.id !== deletecart.id)
      setCount(deleteCart);
    };
    return(
      <div className="HomePage">
        {count.map((productItem) => {
          return (
            <div>
              <ProductItem
              index={productItem.id}
              onClick1={() => handleAddToCart(productItem)}
              onClick2={() => removeCart(productItem)}
              productName={productItem.productName}
              price={productItem.price}
              discount={productItem.discount}
              />
            </div>
          );
        })}
      </div>
    );
  };

export default Homepage;