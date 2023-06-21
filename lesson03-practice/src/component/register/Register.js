import React from 'react';
import './Style.css';


const Register = ({text}) => {
    return(
            <div className="signUpPicture">
                <input className="input" type="text" placeholder={text} />
                {/* <h3 className="text">{text}</h3> */}
            </div>
    );
}
export default Register;