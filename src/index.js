import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import logo from './Assets/logo-2.png';

ReactDOM.render(
  <React.StrictMode>
    {/* Include your logo or other elements here */}
    <img id="logo" src={logo} alt="Logo" />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
