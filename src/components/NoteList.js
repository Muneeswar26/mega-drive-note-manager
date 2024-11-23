import React from 'react';
import NoteItem from './NoteItem';

function NoteList({ notes, editNote, deleteNote }) {
  return (
    <div>
      {notes.length > 0 ? (
        notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            editNote={editNote}
            deleteNote={deleteNote}
          />
        ))
      ) : (
        <p>No notes to display.</p>
      )}
    </div>
  );
}

export default NoteList;
