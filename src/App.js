import React from 'react';
import './App.css';
import Calculator from './components/Calculator'; // Import the Calculator component
// import getJoke from './components/Quote';
import JokeComponent from './components/DisplayQuote';

function App() {
  return (
    <div className="App">
      {/* Quotes are Displayed here */}
      <JokeComponent />
      {/* <button onClick={} type="button">Click me</button> */}
      {/* Add the Calculator component here */}
      <Calculator />
    </div>
  );
}

export default App;
