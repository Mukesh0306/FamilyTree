import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from './supabaseClient'; // Import Supabase client
import './Mukesh.css'; // Import stylesheet

const Mukesh = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [data, setData] = useState([]);
  const [editingId, setEditingId] = useState(null); // Track the current editing item ID

  // Fetch data from the table on component mount
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data, error } = await supabase.from('Mukesh').select();
    if (error) {
      console.error('Error fetching data:', error);
    } else {
      setData(data);
    }
  };

  // Insert new data
  const handleInsert = async () => {
    if (name && address) {
      const { error } = await supabase.from('Mukesh').insert({ name, address });
      if (error) {
        console.error('Error inserting data:', error);
      } else {
        setName(''); // Clear input fields
        setAddress('');
        fetchData(); // Refresh data after insertion
      }
    } else {
      alert('Please fill in both fields.');
    }
  };

  // Update existing data
  const handleUpdate = async () => {
    if (editingId && name && address) {
      console.log('Updating item with id:', editingId); // Debugging line
      const { error } = await supabase.from('Mukesh').update({ name, address }).eq('id', editingId);
      if (error) {
        console.error('Error updating data:', error);
      } else {
        console.log('Update successful'); // Debugging line
        setEditingId(null); // Exit edit mode
        setName(''); // Clear input fields
        setAddress('');
        fetchData(); // Refresh data after update
      }
    } else {
      alert('Please fill in both fields before updating.');
    }
  };

  // Set the edit state
  const handleEdit = (item) => {
    setEditingId(item.id);
    setName(item.name);
    setAddress(item.address);
  };

  // Cancel the edit action
  const handleCancelEdit = () => {
    setEditingId(null);
    setName('');
    setAddress('');
  };

  // Delete data
  const handleDelete = async (id) => {
    const { error } = await supabase.from('Mukesh').delete().eq('id', id);
    if (error) {
      console.error('Error deleting data:', error);
    } else {
      fetchData(); // Refresh data after deletion
    }
  };

  return (
    <div className="mukesh-container">
      <h1>Mukesh</h1>

      {/* Input fields for adding new or editing existing data */}
      <div className="mukesh-input-container">
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mukesh-input"
        />
        <input
          type="text"
          placeholder="Enter Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="mukesh-input"
        />
        {editingId ? (
          <>
            <button onClick={handleUpdate} className="mukesh-button mukesh-button-update">
              Save
            </button>
            <button onClick={handleCancelEdit} className="mukesh-button mukesh-button-cancel">
              Cancel
            </button>
          </>
        ) : (
          <button onClick={handleInsert} className="mukesh-button mukesh-button-add">
            Add
          </button>
        )}
      </div>

      {/* Display fetched data */}
      <ul>
        {data.map((item) => (
          <li key={item.id} className="mukesh-list-item">
            <span>{item.name} - {item.address}</span>
            <button onClick={() => handleEdit(item)} className="mukesh-button mukesh-button-edit">
              Edit
            </button>
            <button onClick={() => handleDelete(item.id)} className="mukesh-button mukesh-button-delete">
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Back button */}
      <button onClick={() => navigate('/')} className="mukesh-button mukesh-button-back">
        Back to Main Page
      </button>
    </div>
  );
};

export default Mukesh;