import React, { useState } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import SearchBar from './components/SearchBar';

function App() {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  // Add a new note
  const addNote = (note) => {
    setNotes([note, ...notes]);
  };

  // Edit an existing note
  const editNote = (id, updatedNote) => {
    setNotes(notes.map((note) => (note.id === id ? updatedNote : note)));
  };

  // Delete a note
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  // Filter notes by search term and category
  const filteredNotes = notes.filter((note) => {
    return (
      (searchTerm === '' || note.title.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (filterCategory === '' || note.category === filterCategory)
    );
  });

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Personal Notes Manager</h1>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
      />
      <NoteForm addNote={addNote} />
      <NoteList notes={filteredNotes} editNote={editNote} deleteNote={deleteNote} />
    </div>
  );
}

export default App;
