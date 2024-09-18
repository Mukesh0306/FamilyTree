import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useNavigate } from 'react-router-dom';

ChartJS.register(ArcElement, Tooltip, Legend);

const Praveen = () => {
  // State to store input values for expenditures
  const [praveenExp, setPraveenExp] = useState(0);
  const [wifeExp, setWifeExp] = useState(0);
  const [daughterExp, setDaughterExp] = useState(0);
  const [homeExp, setHomeExp] = useState(0);
  const [servantExp, setServantExp] = useState(0);
  const [expenditureData, setExpenditureData] = useState([40, 25, 10, 15, 10]); // Default percentages

  const navigate = useNavigate();

  // Function to update pie chart based on input
  const handleUpdate = () => {
    const total = praveenExp + wifeExp + daughterExp + homeExp + servantExp;

    // Prevent division by zero
    if (total === 0) return;

    // Calculate percentages
    const updatedData = [
      (praveenExp / total) * 100,
      (wifeExp / total) * 100,
      (daughterExp / total) * 100,
      (homeExp / total) * 100,
      (servantExp / total) * 100,
    ];

    setExpenditureData(updatedData); // Update the pie chart data
  };

  // Data for the Pie Chart for family expenditure
  const data = {
    labels: ['Praveen', 'Wife', 'Daughter', 'Home', 'Servant'],
    datasets: [
      {
        label: 'Family Expenditure (%)',
        data: expenditureData, // The family expenditure data in percentages
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  const handleBackClick = () => {
    navigate('/'); // Navigate back to the main page
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Praveen Family Expenditure Pie Chart</h1>

      {/* Input Fields for Expenditures with Labels */}
      <div style={{ marginBottom: "20px" }}>
        <div>
          <label>
            Praveen's Expenditure:
            <input
              type="number"
              value={praveenExp}
              onChange={(e) => setPraveenExp(Number(e.target.value))}
              style={{ marginLeft: "10px", padding: "5px" }}
            />
          </label>
        </div>
        <div>
          <label>
            Wife's Expenditure:
            <input
              type="number"
              value={wifeExp}
              onChange={(e) => setWifeExp(Number(e.target.value))}
              style={{ marginLeft: "10px", padding: "5px" }}
            />
          </label>
        </div>
        <div>
          <label>
            Daughter's Expenditure:
            <input
              type="number"
              value={daughterExp}
              onChange={(e) => setDaughterExp(Number(e.target.value))}
              style={{ marginLeft: "10px", padding: "5px" }}
            />
          </label>
        </div>
        <div>
          <label>
            Home Expenditure:
            <input
              type="number"
              value={homeExp}
              onChange={(e) => setHomeExp(Number(e.target.value))}
              style={{ marginLeft: "10px", padding: "5px" }}
            />
          </label>
        </div>
        <div>
          <label>
            Servant Expenditure:
            <input
              type="number"
              value={servantExp}
              onChange={(e) => setServantExp(Number(e.target.value))}
              style={{ marginLeft: "10px", padding: "5px" }}
            />
          </label>
        </div>
      </div>

      {/* Button to Update Pie Chart */}
      <button
        onClick={handleUpdate}
        style={{
          padding: "10px 20px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Update Pie Chart
      </button>

      {/* Render the Pie Chart with custom size */}
      <div style={{ width: "300px", margin: "0 auto" }}>
        <Pie data={data} />
      </div>

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
          cursor: "pointer",
        }}
      >
        Back to Main Page
      </button>
    </div>
  );
};

export default Praveen;
