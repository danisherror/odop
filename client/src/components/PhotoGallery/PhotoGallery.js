// src/components/PhotoGallery.js

import React from 'react';
import ph1 from './big-photo1.jpg';
import ph2 from './big-photo2.jpg';
import ph3 from './small-photo1.jpg';
import ph4 from './small-photo2.jpg';
import ph5 from './small-photo3.jpeg';

const galleryStyle = {
  backgroundColor: '#F2F4F4',
  textAlign: 'center',
  padding: '20px',
};

const bigPhotosStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '20px',
};

const bigPhotoStyle = {
  width: '400px',
  height: '200px',
  maxWidth: '50%',
  marginRight: '10px',
};

const smallPhotosStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const smallPhotoStyle = {
  width: '350px',
  height: '150px',
  maxWidth: '33.33%',
  margin: '0 5px',
};

const paragraphStyle = {
  margin: '5px 0', // Adjust the margin to control the space between lines
};

function PhotoGallery() {
  return (
    <div style={galleryStyle}>
      <div style={bigPhotosStyle}>
        <div>
          <img src={ph1} alt="Big Photo 1" style={bigPhotoStyle} />
          <strong><p style={paragraphStyle}>Shri Manoj Sinha</p></strong>
          <p style={paragraphStyle}>Lieutenant Governor</p>
          <p style={paragraphStyle}>Jammu and Kashmir</p>
        </div>
        <div>
          <img src={ph2} alt="Big Photo 2" style={bigPhotoStyle} />
          <strong><p style={paragraphStyle}>Shri Jitendra Singh</p></strong>
          <p style={paragraphStyle}>Minister of State for PMO, Science and Technology</p>
          <p style={paragraphStyle}>Member of Parliament, Lok Sabha</p>
        </div>
      </div>
      <div style={smallPhotosStyle}>
        <div>
          <img src={ph3} alt="Small Photo 1" style={smallPhotoStyle} />
          <strong><p style={paragraphStyle}>Shri Jugal Kishore Sharma</p></strong>
          <p style={paragraphStyle}>Member of Parliament for Jammu</p>
        </div>
        <div>
          <img src={ph4} alt="Small Photo 2" style={smallPhotoStyle} />
          <strong><p style={paragraphStyle}>Shri Arun Kumar Mehta, IAS</p></strong>
          <p style={paragraphStyle}>Chief Secretary,</p>
          <p style={paragraphStyle}>Jammu and Kashmir</p>
        </div>
        <div>
          <img src={ph5} alt="Small Photo 3" style={smallPhotoStyle} />
          <strong><p style={paragraphStyle}>Shri Raj Kumar Goyal, IAS</p></strong>
          <p style={paragraphStyle}>Additional Chief Secretary (ACS),</p>
          <p style={paragraphStyle}>Financial Commissioner</p>
          <p style={paragraphStyle}>Jammu and Kashmir</p>
        </div>
      </div>
    </div>
  );
}

export default PhotoGallery;
