import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from './supabaseClient';
import './Mukesh.css';

const Mukesh = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [data, setData] = useState([]);
  const [editingId, setEditingId] = useState(null);

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

  const handleInsert = async () => {
    if (name && address) {
      const { error } = await supabase.from('Mukesh').insert({ name, address });
      if (error) {
        console.error('Error inserting data:', error);
      } else {
        setName('');
        setAddress('');
        fetchData();
      }
    } else {
      alert('Please fill in both fields.');
    }
  };

  const handleUpdate = async () => {
    if (editingId && name && address) {
      const { error } = await supabase.from('Mukesh').update({ name, address }).eq('id', editingId);
      if (error) {
        console.error('Error updating data:', error);
      } else {
        setEditingId(null);
        setName('');
        setAddress('');
        fetchData();
      }
    } else {
      alert('Please fill in both fields before updating.');
    }
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setName(item.name);
    setAddress(item.address);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setName('');
    setAddress('');
  };

  const handleDelete = async (id) => {
    const { error } = await supabase.from('Mukesh').delete().eq('id', id);
    if (error) {
      console.error('Error deleting data:', error);
    } else {
      fetchData();
    }
  };

  return (
    <div className="mukesh-container">
      <h1>Mukesh</h1>

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

      <button onClick={() => navigate('/')} className="mukesh-button mukesh-button-back">
        Back to Main Page
      </button>
    </div>
  );
};

export default Mukesh;