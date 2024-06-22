import React, { useState } from 'react';
import './Gallery.css';
import Lightbox from './Lightbox';


const photos = [
  {
    src: 'https://cdn.pixabay.com/photo/2016/11/14/03/56/tiger-1822535_640.jpg',
    category: 'landscape',
    alt: 'Photo 1',
    title: 'Tiger in the wild',
    description: 'A majestic tiger roaming in the forest.',
    date: '2020-11-14',
    location: 'India'
  },
  {
    src: 'https://cdn.pixabay.com/photo/2017/11/03/18/40/model-2915220_640.jpg',
    category: 'potrait',
    alt: 'Photo 2',
    title: 'Model Pose',
    description: 'A model posing for a photo shoot.',
    date: '2017-11-03',
    location: 'New York, USA'
  },
  {
    src: 'https://cdn.pixabay.com/photo/2019/12/21/21/15/man-4711375_1280.jpg',
    category: 'potrait',
    alt: 'Photo 3',
    title: 'Man in the Shadows',
    description: 'A man standing in the shadows.',
    date: '2019-12-21',
    location: 'London, UK'
  },
  {
    src: 'https://plus.unsplash.com/premium_photo-1699388998583-d84f8805bd2b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGFydHklMjBwaG90b3Nob290JTIwa2VueWF8ZW58MHx8MHx8fDA%3D',
    category: 'landscape',
    alt: 'Photo 4',
    title: 'Kenya Party',
    description: 'A vibrant party in Kenya.',
    date: '2021-08-15',
    location: 'Kenya'
  },
  {
    src: 'https://images.unsplash.com/photo-1605807646983-377bc5a76493?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNha2VzfGVufDB8fDB8fHww',
    category: 'landscape',
    alt: 'Photo 5',
    title: 'Beautiful Cakes',
    description: 'Delicious cakes on display.',
    date: '2020-11-19',
    location: 'Paris, France'
  },
  {
    src: 'https://i1.adis.ws/i/canon/eos-r7-lifestyle_c604337a3b374a94a080d40b43f3a920?$70-30-header-4by3-dt-jpg$',
    category: 'event',
    alt: 'Photo 6',
    title: 'Canon Event',
    description: 'A Canon camera event.',
    date: '2019-04-22',
    location: 'Tokyo, Japan'
  },
  {
    src: 'https://cdn.pixabay.com/photo/2023/08/08/09/20/wedding-8176868_640.jpg',
    category: 'event',
    alt: 'Photo 7',
    title: 'Wedding Celebration',
    description: 'A beautiful wedding celebration.',
    date: '2023-08-08',
    location: 'Venice, Italy'
  },
  {
    src: 'https://cdn.pixabay.com/photo/2016/04/26/22/31/bride-1355473_640.jpg',
    category: 'event',
    alt: 'Photo 8',
    title: 'Bride Portrait',
    description: 'A portrait of a bride.',
    date: '2016-04-26',
    location: 'San Francisco, USA'
  },
];

const categories = ['all', 'landscape', 'potrait', 'event'];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(null);

  const filteredPhotos = selectedCategory === 'all'
    ? photos
    : photos.filter(photo => photo.category === selectedCategory);

  const openLightbox = (index) => {
    setCurrentPhotoIndex(index);
  };

  const closeLightbox = () => {
    setCurrentPhotoIndex(null);
  };

  const showNextPhoto = () => {
    setCurrentPhotoIndex((currentPhotoIndex + 1) % filteredPhotos.length);
  };

  const showPrevPhoto = () => {
    setCurrentPhotoIndex((currentPhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
  };

  return (
    <div className="gallery-container">
      <div className="category-filter">
        {categories.map((category) => (
          <button
            key={category}
            className={selectedCategory === category ? 'active' : ''}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="photo-grid">
        {filteredPhotos.map((photo, index) => (
          <div className="photo-thumbnail" key={index}>
            <img 
              src={photo.src} 
              alt={photo.alt} 
              onClick={() => openLightbox(index)} 
            />
          </div>
        ))}
      </div>
      {currentPhotoIndex !== null && (
        <Lightbox 
          photo={filteredPhotos[currentPhotoIndex]} 
          onClose={closeLightbox} 
          onNext={showNextPhoto} 
          onPrev={showPrevPhoto} 
        />
      )}
    </div>
  );
};

export default Gallery;