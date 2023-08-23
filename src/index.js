import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Calculator from './components/Calculator';
import logo from './Assets/logo-2.png';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <img src={logo} alt="Logo" />
    <Calculator />
  </React.StrictMode>,
);

reportWebVitals();
