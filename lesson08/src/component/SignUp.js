import React from 'react'

const SignUp = () => {
  return (
    <div className="SignUpPart">
        <h1>SIGN UP</h1>
        <div className="Name">
            <h3>Name</h3>
            <input type="text" className="SignInEmail" placeholder="Enter Name"/>
        </div>
        <div className="Email">
            <h3>Email Address</h3>
            <input type="text" className="SignInEmail" placeholder="Enter Email"/>
        </div>
        <div className="Pass">
            <h3>Password</h3>
            <input type="text" className="SignInPass" placeholder="Enter Password"/>
        </div>
        <div className="Pass">
            <h3>Confirm Password</h3>
            <input type="text" className="SignInPass" placeholder="Enter Password"/>
        </div>
        <button className="SignupButton">REGISTER</button>
    </div>
  )
}

export default SignUp