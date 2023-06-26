import React, { useState } from 'react'

export const Card = ({branch}) => {
  const [sold, setSold] = useState(0);
  const handlerClick = () => {
    setSold(sold + 1);
  }
  return (
    <div className="card">
        <img src="./picture/giày adidas.jpg" 
        alt=""
        width = "200"
        height = "200" 
      />
      <h4>{branch}</h4>
      <p>$30</p>
      <h3>sold: {sold}</h3>
      <button onClick = {handlerClick}>Mua</button>
    </div>
  )
}
