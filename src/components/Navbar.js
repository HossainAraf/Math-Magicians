import React from 'react';
import { Link } from 'react-router-dom';
import NavStyles from '../styles/Navbar.module.css';

const Navbar = () => (
  <nav className={NavStyles.nav}>
    <h3>Math Magicians</h3>
    <ul className={NavStyles.ul}>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/calculator">Calculator</Link></li>
      <li><Link to="/quote">Quote</Link></li>
    </ul>
  </nav>
);

export default Navbar;
