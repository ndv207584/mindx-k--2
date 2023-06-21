import logo from './logo.svg';
import './App.css';
import Register from './component/register/Register/';

function App() {
  return (
    <section className="App Container">
      <div>
      <img className="signUpImg" src="./picture/signuppicbg.png" alt="" />
      <img className="signUpImg2" src="./picture/Vector.png" alt="" />
      <div>
        <h3 className="signUpText">Shop App</h3>
      </div>
      </div>
      <div className="SignUp">
            <div className="signUpPart">
                <h2>Welcome to Shop App</h2>
            </div>
            <div className="signUpInput">
            <Register text="User Name" /> 
            <Register text="Email@gmail.com" />
            <Register text="Password" />
            <Register text="Confirm Password" />
            </div>
            <button className="button">Register</button>
            <p>Login</p>
        </div>
    </section>
  );
}

export default App;
