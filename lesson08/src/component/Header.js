import React from 'react'
import './Component.css';
import SignIn from './SignIn';
import SignUp from './SignUp';

const Header = () => {
  return (
    <div>
        <div className="HeaderPart">
            <h3 className="HeaderName">PROSHOP</h3>
            <div className="HeaderTool">
                <input type="text" className="HeaderInput" placeholder="Search Products..."/>
                <button className="HeaderButton">SEARCH</button>
            </div>
            <div className="HeaderIcon">
                <div className="Icon1">
                <i className="fa-solid fa-cart-shopping Cart"></i>
                <h3 className="HeaderCart">CART</h3>
                </div>
                <div className="Icon2">
                <i className="fa-solid fa-user User"></i>
                <button className="HeaderSignIn">SIGN IN</button>
                </div>
            </div>
        </div>
        <SignIn />
        <SignUp />
    </div>
  )
}

export default Header