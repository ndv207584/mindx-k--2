import React from 'react';
import CartItem from './CartItem';
import ProductItem from '../Homepage/ProductItem';
import './Cart.css';

const Cart = () => {
    return(
        <div className="CartForm">
            <h2 className="CartName">Cart</h2>
            <div className="CartContent">
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
        </div>
    )
}

export default Cart;