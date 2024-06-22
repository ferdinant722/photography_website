import React from 'react';
import './Navbar.css'
function Navbar({ setActiveSection }) {
  return (
    <nav>
      <ul>
        <li onClick={() => setActiveSection('Home')}>Home</li>
        <li onClick={() => setActiveSection('About')}>About</li>
        <li onClick={() => setActiveSection('Gallery')}>Gallery</li>
        <li onClick={() => setActiveSection('Lightbox')}>Footer</li>
        <li onClick={() => setActiveSection('Contact')}>Contact</li>
        <li className="name">Fedinant<span className='shem'>Shem</span></li>
      </ul>
    </nav>
  );
}

export default Navbar;
