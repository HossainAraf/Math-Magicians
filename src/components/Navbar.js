import React from 'react';
import { Link } from 'react-router-dom';
import NavStyles from '../styles/Navbar.module.css';
import logo from '../Assets/logo.png';

const Navbar = () => (
  <nav className={NavStyles.nav}>
    <img src={logo} alt="Logo" />
    <h1>Math Magicians</h1>
    <ul className={NavStyles.ul}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/calculator">Calculator</Link></li>
      <li><Link to="/quote">Quote</Link></li>
    </ul>
  </nav>
);

export default Navbar;
