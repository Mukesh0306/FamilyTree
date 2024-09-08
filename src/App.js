import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import NavComponent from './Nav';
import TreeBranches from './TreeBranches';
import SpeechRecog from './SpeechRecog';
import Manjunath from './Manjunath';
import Mukesh from './Mukesh';
import Praveen from './Praveen';
import Parents from './Parents';
import './App.css';

function App() {
  const location = useLocation();

  const isSpecificPage = location.pathname === "/manjunath" || location.pathname === "/mukesh" || location.pathname === "/praveen" || location.pathname === "/parents";

  return (
    <div className="app-container">
      <NavComponent />

      {!isSpecificPage && (
        <div className="main-content">
          <TreeBranches />
          <SpeechRecog />
        </div>
      )}

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