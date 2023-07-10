import React from 'react';
import './Component.css';
import SignUp from './SignUp';

const SignIn = () => {
  return (
    <div className="SignInPart">
        <h1>SIGN IN</h1>
        <div className="Email">
            <h3>Email Address</h3>
            <input type="text" className="SignInEmail" placeholder="Enter Email"/>
        </div>
        <div className="Pass">
            <h3>Password</h3>
            <input type="text" className="SignInPass" placeholder="Enter Password"/>
        </div>
        <button className="SignInButton">SIGN IN</button>
        <button className="Link">New customer?</button>
        <h3 className="Register">Register</h3>
    </div>
  )
}

export default SignIn;