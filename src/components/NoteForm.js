import React, { useState } from 'react';

function NoteForm({ addNote }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Others');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert('Title and Description are required!');
      return;
    }

    const newNote = {
      id: Date.now(), // Unique ID
      title,
      description,
      category,
      createdAt: new Date().toLocaleString(),
    };

    addNote(newNote);
    setTitle('');
    setDescription('');
    setCategory('Others');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Description</label>
        <textarea
          className="form-control"
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="mb-3">
        <label className="form-label">Category</label>
        <select
          className="form-control"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Others">Others</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">Add Note</button>
    </form>
  );
}

export default NoteForm;
