import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="logo">Megan Calme</a>
      <ul className="nav-links">
        <li><Link to="/portfolio">See My Portfolio</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
