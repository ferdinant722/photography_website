import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/lightbox">Lightbox</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li className="name">Fedinant<span className='shem'>Shem</span></li>
      </ul>
      <Outlet />
    </nav>
  );
}

export default Navbar;
