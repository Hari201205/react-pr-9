import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNote, removeNote } from '../actions/noteActions';
import { v4 as uuidv4 } from 'uuid';


const NotesContainer = () => {
  const notes = useSelector(state => state.notes);
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState('');

  const handleAddNote = () => {
    if (inputText.trim() !== '') {
      dispatch(addNote({ id: uuidv4(), text: inputText }));
      setInputText('');
    }
  };

  const handleRemoveNote = (id) => {
    dispatch(removeNote(id));
  };

  return (
    <div className="notes-container">
      <div className="add-note">
        <input
          type="text"
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          placeholder="Enter a new note..."
        />
        <button onClick={handleAddNote}>+</button>
      </div>
      <div className="notes">
        {notes.map(note => (
          <div key={note.id} className="note">
            <p>{note.text}</p>
            <button onClick={() => handleRemoveNote(note.id)}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesContainer;
