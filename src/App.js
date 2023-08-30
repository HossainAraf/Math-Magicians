import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Calculator from './components/Calculator';
import QuoteComponent from './components/DisplayQuote';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/quote" element={<QuoteComponent />} />
          <Route exact path="/calculator" element={<Calculator />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
