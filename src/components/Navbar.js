import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/Calculator">calculator</Link></li>
      <li><Link to="/quote">Quote</Link></li>
    </ul>
  </nav>
);

export default Navbar;