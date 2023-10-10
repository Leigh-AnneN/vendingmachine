import React from 'react';
import { Link } from 'react-router-dom';
import candyimg from "./candyimg.jpg";

function Soda() {
return (
      <div>
        <h2>Soda</h2>
        <h2><Link to="/">Go back to vending machine</Link></h2>
        <img src={candyimg} width={600}alt="Soda" /> 
      </div>
    );
  }

export default Soda;