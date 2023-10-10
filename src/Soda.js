import React from 'react';
import { Link } from 'react-router-dom';
import sodaImg from "./Soda.png";

function Soda() {
return (
      <div>
        <h2>Soda</h2>
        <h2><Link to="/">Go back to vending machine</Link></h2>
        <img src={sodaImg} width={200} height={200} alt="Soda" /> 
      </div>
    );
  }

export default Soda;