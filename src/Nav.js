import React from 'react';

import './Nav.css';  // Import the custom CSS
import { Link } from 'react-router-dom';

function NavComponent() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Image next to the Family Tree text */}
        <Link className="navbar-brand" to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src={`${process.env.PUBLIC_URL}/TreeDesign.jpg`} 
            alt="Tree Design" 
            style={{ width: '30px', height: '30px', marginRight: '10px' }} 
          />
          Family Tree
        </Link>
        <div className="navbar-links">
          <Link className="nav-link" to="/end">Manjunath</Link>
          <Link className="nav-link" to="/info">Mukesh</Link>
          <Link className="nav-link" to="/BioData">Praveen</Link>
        </div>
      </div>
    </nav>
  );
}

export default NavComponent;
