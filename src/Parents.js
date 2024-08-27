import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from './supabaseClient';

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
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Parents</h1>

      {/* Input fields for adding new or editing existing data */}
      <div style={{ marginBottom: "20px" }}>
        <input 
          type="text" 
          placeholder="Enter Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          style={{ marginRight: '10px', padding: '8px', width: '200px' }}
        />
        <input 
          type="text" 
          placeholder="Enter Address" 
          value={address} 
          onChange={(e) => setAddress(e.target.value)} 
          style={{ marginRight: '10px', padding: '8px', width: '200px' }}
        />
        <input 
          type="text" 
          placeholder="Enter Phone Number" 
          value={phoneNumber} 
          onChange={(e) => setPhoneNumber(e.target.value)} 
          style={{ marginRight: '10px', padding: '8px', width: '200px' }}
        />
        <input 
          type="text" 
          placeholder="Enter Relation" 
          value={relation} 
          onChange={(e) => setRelation(e.target.value)} 
          style={{ marginRight: '10px', padding: '8px', width: '200px' }}
        />
        {editingId ? (
          <>
            <button onClick={() => handleUpdate(editingId)} style={{ padding: '8px 16px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              Save
            </button>
            <button onClick={handleCancelEdit} style={{ padding: '8px 16px', marginLeft: '10px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              Cancel
            </button>
          </>
        ) : (
          <button onClick={handleInsert} style={{ padding: '8px 16px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
            Add
          </button>
        )}
      </div>

      {/* Display fetched data */}
      <ul>
        {data.map((item) => (
          <li key={item.id} style={{ marginBottom: '20px' }}>
            <span>{item.name} - {item.address} - {item.phone_number} - {item.relation}</span>
            <button 
              onClick={() => handleEdit(item)} 
              style={{ marginLeft: '10px', padding: '8px 16px', backgroundColor: 'orange', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              Edit
            </button>
            <button 
              onClick={() => handleDelete(item.id)} 
              style={{ marginLeft: '10px', padding: '8px 16px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Back button */}
      <button 
        onClick={() => navigate('/')} 
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

export default Parents;
