import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';  // Import the custom CSS

function NavComponent() {
  return (
    <div>
      <nav className="nav-component">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/parents">Parents</Link></li>
          <li><Link to="/manjunath">Manjunath</Link></li>
          <li><Link to="/mukesh">Mukesh</Link></li>
          <li><Link to="/praveen">Praveen</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default NavComponent;