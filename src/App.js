import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import NavComponent from './Nav';  // Import the NavComponent
import Tree from './Tree';  // Import the Tree component
import TreeBranches from './TreeBranches'; // Import the TreeBranches component
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap CSS
import './App.css'; // Import your custom CSS
import SpeechRecog from './SpeechRecog';
import Manjunath from './Manjunath';  // Import the Manjunath component
import Mukesh from './Mukesh';  // Import the Mukesh component
import Praveen from './Praveen';  // Import the Praveen component
import Parents from './Parents';  // Import the Parents component

function App() {
  const location = useLocation();  // Hook to access the current route

  // Check if the current route is one of the specific pages
  const isSpecificPage = location.pathname === "/manjunath" || location.pathname === "/mukesh" || location.pathname === "/praveen" || location.pathname === "/parents";

  return (
    <div className="app-container">
      {!isSpecificPage && (  // Hide everything if it's one of the specific pages
        <>
          {/* Navigation Bar */}
          <NavComponent />

          {/* Main Content */}
          <div className="content">
            <h1 className="text-center my-4">Family Tree</h1>

            {/* Flexbox layout for Tree and TreeBranches */}
            <div className="row">
              <div className="col-md-6">
                <Tree />
              </div>
              <div className="col-md-6">
                <TreeBranches />
              </div>
            </div>

            {/* Speech Recognition and Voice Command Instructions */}
            <div className="my-4">
              <SpeechRecog />  {/* Speech recognition component */}
            </div>
          </div>
        </>
      )}

      {/* Routes for each branch */}
      <Routes>
        <Route path="/parents" element={<Parents />} />
        <Route path="/manjunath" element={<Manjunath />} />
        <Route path="/mukesh" element={<Mukesh />} />
        <Route path="/praveen" element={<Praveen />} />
      </Routes>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
