// src/About.js
import React from 'react';
import './About.css';
import profilePic from './DSC_0832.jpg'; // Make sure to replace this with the actual path to your photo

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="profile-image">
          <img src={profilePic} alt="Profile" />
        </div>
        <div className="about-text">
          <h1>About Me</h1>
          <p>
            Hello! My name is Fedinant Shem, and I am a passionate photographer based in Nairobi. 
            My journey into photography began back in 2019. Over the years, I have 
            honed my skills in various photography styles, including  portrait, 
            landscape, street photography.
          </p>
          <p>
            With a background in  art, design, and other fields I bring a unique 
            perspective to my work. My goal is to capture the beauty and essence of every moment, creating 
            timeless images that tell a story.
          </p>
          <p>
            Whether I'm shooting in a bustling city or a serene natural landscape, I strive to find the perfect 
            balance of light, composition, and emotion in each photograph. Thank you for visiting my portfolio, 
            and I hope you enjoy viewing my work as much as I enjoyed creating it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
