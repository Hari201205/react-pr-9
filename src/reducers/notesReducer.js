const initialState = [];

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return [...state, action.payload];
    case 'REMOVE_NOTE':
      return state.filter(note => note.id !== action.payload);
    default:
      return state;
  }
};

export default notesReducer;
