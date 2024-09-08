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
    if (error) console.error('Error fetching data:', error);
    else setData(data);
  };

  const handleInsert = async () => {
    if (name && address && phoneNumber && relation) {
      const { error } = await supabase.from('Parents').insert({ name, address, phone_number: phoneNumber, relation });
      if (error) console.error('Error inserting data:', error);
      else {
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
      const { error } = await supabase.from('Parents').update({ name, address, phone_number: phoneNumber, relation }).eq('id', id);
      if (error) console.error('Error updating data:', error);
      else {
        setEditingId(null);
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
    const { error } = await supabase.from('Parents').delete().eq('id', id);
    if (error) console.error('Error deleting data:', error);
    else fetchData();
  };

  return (
    <div className="container">
      <h1 className="title">Parents</h1>

      <div className="input-container">
        <input 
          type="text" 
          placeholder="Enter Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          className="input-field"
        />
        <input 
          type="text" 
          placeholder="Enter Address" 
          value={address} 
          onChange={(e) => setAddress(e.target.value)} 
          className="input-field"
        />
        <input 
          type="text" 
          placeholder="Enter Phone Number" 
          value={phoneNumber} 
          onChange={(e) => setPhoneNumber(e.target.value)} 
          className="input-field"
        />
        <input 
          type="text" 
          placeholder="Enter Relation" 
          value={relation} 
          onChange={(e) => setRelation(e.target.value)} 
          className="input-field"
        />
        {editingId ? (
          <>
            <button onClick={() => handleUpdate(editingId)} className="btn btn-success">
              Save
            </button>
            <button onClick={handleCancelEdit} className="btn btn-danger">
              Cancel
            </button>
          </>
        ) : (
          <button onClick={handleInsert} className="btn btn-primary">
            Add
          </button>
        )}
      </div>

      <ul className="list">
        {data.map((item) => (
          <li key={item.id} className="list-item">
            <span>{item.name} - {item.address} - {item.phone_number} - {item.relation}</span>
            <button onClick={() => handleEdit(item)} className="btn btn-warning">
              Edit
            </button>
            <button onClick={() => handleDelete(item.id)} className="btn btn-danger">
              Delete
            </button>
          </li>
        ))}
      </ul>

      <button onClick={() => navigate('/')} className="btn btn-primary">
        Back to Main Page
      </button>
    </div>
  );
};

export default Parents;