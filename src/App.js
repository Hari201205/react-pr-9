
import React from 'react';
import { Provider } from 'react-redux';
import store from '../src/store/store';
import NotesContainer from './components/NotesContainer';
import './styles.css'

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <h1>Google Keep Clone</h1>
        <NotesContainer />
      </div>
    </Provider>
  );
}

export default App;
