import React, { useState, useEffect } from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCameraRetro } from '@fortawesome/free-solid-svg-icons';
import img2 from './DSC_0832.jpg';
import img1 from '../images/camera_man.jpg';
import img3 from '../images/water.jpg';
import Footer from './Footer';

const images = [img2, img1, img3];

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="container">
        <div className="hero">
          <div className="hero-images">
            <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} className="hero-image" />
          </div>
          <div className="hero-content">
            <h1>Welcome to My Photography</h1>
            <p className="tagline">Capturing moments from today... Creating memories for a lifetime</p>
            <FontAwesomeIcon icon={faCameraRetro} size="2x" />
            <h1>Home</h1>
            <p>This is the homepage</p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
