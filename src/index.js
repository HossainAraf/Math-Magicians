import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import logo from './Assets/logo-2.png';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <img id="logo" src={logo} alt="Logo" />
    <App />
  </React.StrictMode>,
);
