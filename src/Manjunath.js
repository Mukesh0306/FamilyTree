import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Manjunath.css';

const Manjunath = () => {
  const navigate = useNavigate();
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await fetch('/api/notes');
      const data = await response.json();
      setNotes(data);
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddNote = async () => {
    if (note.trim() === '') return;

    try {
      const response = await fetch('/api/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text: note }),
      });
      const data = await response.json();
      setNotes([data, ...notes]);
      setNote('');
    } catch (error) {
      console.error('Error adding note:', error);
    }
  };

  const handleDeleteNote = async (id) => {
    try {
      await fetch(`/api/notes/${id}`, {
        method: 'DELETE',
      });
      const updatedNotes = notes.filter(note => note.id !== id);
      setNotes(updatedNotes);
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  const handleBackClick = () => {
    navigate('/');
  };

  // Filter notes based on the search term
  const filteredNotes = notes.filter(note =>
    note.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="title">Manjunath's Notes</h1>

      <button onClick={handleBackClick} className="button">
        Back to Main Page
      </button>
      
      <textarea 
        placeholder="Enter a note..." 
        value={note}
        onChange={handleNoteChange}
        className="noteInput"
      />
      <button onClick={handleAddNote} className="button">Add Note</button>

      <input 
        type="text" 
        placeholder="Search notes..." 
        value={searchTerm}
        onChange={handleSearchChange}
        className="searchInput"
      />
      
      <div className="notes">
        {filteredNotes.map((note) => (
          <div key={note.id} className="noteItem">
            <p>{note.text}</p>
            <button onClick={() => handleDeleteNote(note.id)} className="deleteButton">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Manjunath;