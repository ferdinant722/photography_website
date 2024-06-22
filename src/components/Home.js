import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import img2 from './DSC_0832.jpg';
import img1 from '../images/camera_man.jpg';
import img3 from '../images/water.jpg';

export default function Home() {
  return (
    <div className="container">
      <div className="hero">
        <div className="hero-images">
          <div className="hero-slide">
            <img src={img2} alt="Slide 1" className="hero-image" />
          </div>
          <div className="hero-slide">
            <img src={img1} alt="Slide 2" className="hero-image" />
          </div>
          <div className="hero-slide">
            <img src={img3} alt="Slide 3" className="hero-image" />
          </div>
        </div>
        <div className="hero-content">
          <h1>Welcome to My Photography</h1>
          <p className="tagline">Capturing moments from today... Creating memories for a lifetime</p>
          <FontAwesomeIcon icon={faCameraRetro} size="2x" />
          <h1>Home</h1>
      <p>This is the homepage</p>
        </div>
      </div>
    </div>
  );
}
