import React from 'react';
import './Nav.css';  // Import the custom CSS

function NavComponent() {
  return (
    <div>
      <nav className="nav-component">
        <ul>
          <li><a  href="#home">Home</a></li>
          <li><a href="#news">News</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>

      
    </div>
  );
}

export default NavComponent;
