import React from 'react';
import { useNavigate } from 'react-router-dom';

const Manjunath = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Manjunath</h1>
      
      <button 
        onClick={handleBackClick} 
        style={styles.button}
      >
        Back to Main Page
      </button>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f0f0f0",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  title: {
    color: "#333",
    fontSize: "2.5em",
    marginBottom: "20px",
  },
  button: {
    marginTop: "20px",
    padding: "12px 24px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s ease",
  },
};

export default Manjunath;