import React from "react";
// import './BodyList';  
import '../Chart/Chart';
import './Body.css';
import Chart from "../Chart/Chart";

const Body = () => {
    <Chart />
    return(
        <div className="BodyPart">
            <div className="List">
                <h4 className="ListDate">January <br/> 2022 <br/> 16</h4>
                <h2 className="ListName">Some Book</h2>
                <h3 className="ListPrice">$50</h3>
            </div>
            <div className="List">
                <h4 className="ListDate">October <br/> 2022 <br/> 10</h4>
                <h2 className="ListName">Electricity Bill</h2>
                <h3 className="ListPrice">$75</h3>
            </div>
            <div className="List">
                <h4 className="ListDate">May <br/> 2022 <br/> 8</h4>
                <h2 className="ListName">New Bike</h2>
                <h3 className="ListPrice">$100</h3>
            </div>            
        </div>
    );
};

export default Body;