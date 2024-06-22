import React from 'react';
import './Lightbox.css';

const Lightbox = ({ photo, onClose, onNext, onPrev }) => {
  if (!photo) return null;

  return (
    <div className="lightbox">
      <div className="lightbox-content">
        <span className="close" onClick={onClose}>&times;</span>
        <img src={photo.src} alt={photo.alt} />
        <div className="lightbox-details">
          <h2>{photo.title}</h2>
          <p>{photo.description}</p>
          <p><strong>Date:</strong> {photo.date}</p>
          <p><strong>Location:</strong> {photo.location}</p>
        </div>
        <button className="prev" onClick={onPrev}>&#10094;</button>
        <button className="next" onClick={onNext}>&#10095;</button>
      </div>
    </div>
  );
};

export default Lightbox;
