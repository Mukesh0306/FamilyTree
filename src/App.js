import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavComponent from './Nav';  // Import the NavComponent
import Tree from './Tree';  // Import the Tree component
import TreeBranches from './TreeBranches'; // Import the TreeBranches component
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import 'orgchart/dist/css/jquery.orgchart.css';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <NavComponent />
        
        {/* Main Content: Tree Structure */}
        <div className="container">
          <h1 className="text-center my-4">Family Tree</h1>
          
          {/* Display Tree and TreeBranches side by side */}
          <div className="row">
            <div className="col-md-6">
              <Tree />
            </div>
            <div className="col-md-6">
              <TreeBranches />
            </div>
          </div>
        </div>
        
        {/* Routes for each branch */}
        <Routes>
          <Route path="/parents" element={<div>Parents Page</div>} />
          <Route path="/manjunath" element={<div>Manjunath Page</div>} />
          <Route path="/mukesh" element={<div>Mukesh Page</div>} />
          <Route path="/praveen" element={<div>Praveen Page</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
