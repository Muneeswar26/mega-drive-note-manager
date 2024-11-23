import React from 'react';

function NoteItem({ note, deleteNote }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text">{note.description}</p>
        <p className="card-text">
          <small className="text-muted">Category: {note.category}</small>
        </p>
        <p className="card-text">
          <small className="text-muted">Created At: {note.createdAt}</small>
        </p>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => deleteNote(note.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default NoteItem;
