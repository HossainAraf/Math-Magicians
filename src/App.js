import React from 'react';
import './App.css';
import Calculator from './components/Calculator'; // Import the Calculator component
import Quote from './components/DisplayQuote';

function App() {
  return (
    <div className="App">
      {/* Quotes are Displayed here */}
      <Quote />
      {/* Add the Calculator component here */}
      <Calculator />
    </div>
  );
}

export default App;
