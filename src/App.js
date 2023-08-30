import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import QuoteComponent from './components/DisplayQuote';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Calculator />} />
          <Route path="/quote" element={<QuoteComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
