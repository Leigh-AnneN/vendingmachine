import React from 'react';
import { Link } from 'react-router-dom';
import chipsImg from "./Chips.png";


function Chips() {
  return (
    <div>
      <h2>Chips</h2>
      <h2><Link to="/">Go back to vending machine</Link></h2>
      <img src={chipsImg} alt="Chips" />
    </div>
  );
}

export default Chips;