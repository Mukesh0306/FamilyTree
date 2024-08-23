import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import NavComponent from './Nav';  // Import the NavComponent
import TreeBranches from './TreeBranches'; // Import the TreeBranches component
import SpeechRecog from './SpeechRecog';  // Import the SpeechRecog component
import Manjunath from './Manjunath';  // Import the Manjunath component
import Mukesh from './Mukesh';  // Import the Mukesh component
import Praveen from './Praveen';  // Import the Praveen component
import Parents from './Parents';  // Import the Parents component
import './App.css'; // Import your custom CSS

function App() {
  const location = useLocation();  // Hook to access the current route

  // Check if the current route is one of the specific pages
  const isSpecificPage = location.pathname === "/manjunath" || location.pathname === "/mukesh" || location.pathname === "/praveen" || location.pathname === "/parents";

  return (
    <div className="app-container">
      {/* Navigation Bar */}
      <NavComponent />

      {/* Main Content */}
      {!isSpecificPage && (
        <div className="main-content">
          <div className="left-side">
            <TreeBranches />
          </div>
          <div className="right-side">
            <SpeechRecog />
          </div>
        </div>
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
