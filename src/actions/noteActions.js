export const ADD_NOTE = 'ADD_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';

export const addNote = (note) => ({
  type: ADD_NOTE,
  payload: note,
});

export const removeNote = (id) => ({
  type: REMOVE_NOTE,
  payload: id,
});
