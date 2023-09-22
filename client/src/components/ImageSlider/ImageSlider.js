// src/components/ImageSlider.js

import React, { useState } from 'react';
import './ImageSlider.css'; // Create this CSS file for styling
import image1 from './image1.png';
import image2 from './image2.jpeg';
import image3 from './image3.jpeg';

function ImageSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Define an array of image URLs
  const images = [
    image1,
    image2,
    image3,
    // Add more image URLs here
  ];

  // Function to handle clicking the next button
  const nextImage = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  // Function to handle clicking the previous button
  const previousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <div className="image-slider">
      <button className="nav-button" onClick={previousImage} disabled={currentImageIndex === 0}>
        Previous
      </button>
      <div className="image-container">
        <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
      </div>
      <button className="nav-button" onClick={nextImage} disabled={currentImageIndex === images.length - 1}>
        Next
      </button>
    </div>
  );
}

export default ImageSlider;
