import React from 'react';
import ReactDOM from 'react-dom';
// import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import logo from './Assets/logo-2.png';
// import logo1 from '../logo192.png';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <img id="logo" src={logo} alt="Logo" />
    {/* <img id="logo1" src={logo1} alt="Logo" /> */}
    <App />
  </React.StrictMode>,
);
