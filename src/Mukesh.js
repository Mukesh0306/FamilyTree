import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const Mukesh = () => {
  const navigate = useNavigate();  // Initialize the navigate hook

  const handleBackClick = () => {
    navigate('/');  // Navigate to the main page
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Mukesh</h1>
      
      {/* Back button */}
      <button 
        onClick={handleBackClick} 
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Back to Main Page
      </button>
    </div>
  );
};

export default Mukesh;
