import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from './supabaseClient';
import './Parents.css';

const Parents = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [relation, setRelation] = useState('');
  const [data, setData] = useState([]);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data, error } = await supabase.from('Parents').select();
    if (error) {
      console.error('Error fetching data:', error.message, error.details);
      alert('Failed to fetch data: ' + error.message);
    } else {
      setData(data);
    }
  };

  const handleInsert = async () => {
    if (name && address && phoneNumber && relation) {
      const { error } = await supabase.from('Parents').insert({ name, address, phone_number: phoneNumber, relation });
      if (error) {
        console.error('Error inserting data:', error.message, error.details);
        alert('Failed to insert: ' + error.message);
      } else {
        setName('');
        setAddress('');
        setPhoneNumber('');
        setRelation('');
        fetchData();
      }
    } else {
      alert('Please fill in all fields.');
    }
  };

  const handleUpdate = async (id) => {
    if (name && address && phoneNumber && relation) {
      try {
        const { data, error } = await supabase
          .from('Parents')
          .update({ name, address, phone_number: phoneNumber, relation })
          .eq('id', id)
          .select();
        
        if (error) {
          console.error('Error updating data:', error.message, error.details);
          alert('Failed to update: ' + error.message);
        } else {
          setEditingId(null);
          setName('');
          setAddress('');
          setPhoneNumber('');
          setRelation('');
          fetchData();
        }
      } catch (error) {
        console.error('Exception during update:', error);
        alert('An unexpected error occurred during update');
      }
    } else {
      alert('Please fill in all fields.');
    }
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setName(item.name);
    setAddress(item.address);
    setPhoneNumber(item.phone_number);
    setRelation(item.relation);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setName('');
    setAddress('');
    setPhoneNumber('');
    setRelation('');
  };

  const handleDelete = async (id) => {
    try {
      const { error } = await supabase
        .from('Parents')
        .delete()
        .eq('id', id);
      
      if (error) {
        console.error('Error deleting data:', error.message, error.details);
        alert('Failed to delete: ' + error.message);
      } else {
        fetchData();
      }
    } catch (error) {
      console.error('Exception during delete:', error);
      alert('An unexpected error occurred during delete');
    }
  };

  return (
    <div className="parents-container">
      <h1 className="parents-title">Parents</h1>

      <div className="parents-input-container">
        <input 
          type="text" 
          placeholder="Enter Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          className="parents-input"
        />
        <input 
          type="text" 
          placeholder="Enter Address" 
          value={address} 
          onChange={(e) => setAddress(e.target.value)} 
          className="parents-input"
        />
        <input 
          type="text" 
          placeholder="Enter Phone Number" 
          value={phoneNumber} 
          onChange={(e) => setPhoneNumber(e.target.value)} 
          className="parents-input"
        />
        <input 
          type="text" 
          placeholder="Enter Relation" 
          value={relation} 
          onChange={(e) => setRelation(e.target.value)} 
          className="parents-input"
        />
        {editingId ? (
          <>
            <button onClick={() => handleUpdate(editingId)} className="parents-button parents-button-success">
              Save
            </button>
            <button onClick={handleCancelEdit} className="parents-button parents-button-danger">
              Cancel
            </button>
          </>
        ) : (
          <button onClick={handleInsert} className="parents-button parents-button-primary">
            Add
          </button>
        )}
      </div>

      <ul className="parents-list">
        {data.map((item) => (
          <li key={item.id} className="parents-list-item">
            <span>{item.name} - {item.address} - {item.phone_number} - {item.relation}</span>
            <button onClick={() => handleEdit(item)} className="parents-button parents-button-warning">
              Edit
            </button>
            <button onClick={() => handleDelete(item.id)} className="parents-button parents-button-danger">
              Delete
            </button>
          </li>
        ))}
      </ul>

      <button onClick={() => navigate('/')} className="parents-button parents-button-primary">
        Back to Main Page
      </button>
    </div>
  );
};

export default Parents;