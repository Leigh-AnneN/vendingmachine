import React from 'react';
import { Link } from 'react-router-dom';
import vendingmachine from "./vendingmachine.jpg";
import "./VendingMachine.css";

const VendingMachine = () => {
  // List of snacks available in the vending machine
  const snacks = ['Soda', 'Chips', 'Candy'];

  return (
    <div
    className="VendingMachine"
      style={{ backgroundImage: `url(${vendingmachine})` }}>
      <h1>Vending Machine</h1>
      <ul>
        {snacks.map((snack, index) => (
          <li key={index}>
            <Link to={`${snack}`}>{snack}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VendingMachine;


