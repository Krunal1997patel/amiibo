import React from 'react';
import Navbar from './components/Navbar';
import AllAmiibo from './components/AllAmiibo'

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <AllAmiibo/>
    </div>
  );
}

export default App;
