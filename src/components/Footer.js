import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <p>&copy; {currentYear} Fedinant Shem. All rights reserved.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-social-media">
          <h4>Follow Me</h4>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-facebook"></i></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-square-x-twitter"></i></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-square-instagram"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
