// src/components/Navbar.js

import React from 'react';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="bottom-section">
        <ul className="menu">
          <li><a href="http://localhost:3000/home">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="http://localhost:3000">Mart</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Connect</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
