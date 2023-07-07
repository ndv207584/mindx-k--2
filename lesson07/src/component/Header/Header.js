import React from 'react';
// import {BiSearch, BiCart, BiUser} from 'react-icons/bi';
import './Header.css';

const Header = ({count}) => {
    return(
        <div className="HeaderForm">
            <h1 className="HeaderTitle">SHOP APP</h1>
            <div className="HeaderBar">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Nhập sản phẩm cần tìm..." className="HeaderSearch"/>
            </div>
            <div className="HeaderIcon">
                <div className="HeaderBasket">
                    <i className="basket fa-solid fa-basket-shopping"></i>
                    <h4 className="ItemNumber">({count.length})</h4>
                </div>
                <i className="fa-solid fa-user"></i>
            </div>
        </div>
    );
};

export default Header;