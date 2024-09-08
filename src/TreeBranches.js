import React from 'react';
import './TreeBranches.css';
import { Link } from "react-router-dom";

const TreeBranches = () => {
  return (
    <div className="button-container">
      <Link to="/parents"><button>Parents</button></Link>
      <Link to="/manjunath"><button>Manjunath</button></Link>
      <Link to="/mukesh"><button>Mukesh</button></Link>
      <Link to="/praveen"><button>Praveen</button></Link>
    </div>
  );
};

export default TreeBranches;