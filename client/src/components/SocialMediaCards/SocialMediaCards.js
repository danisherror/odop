// src/components/SocialMediaCards.js

import React from 'react';
import './SocialMediaCards.css'; // Create this CSS file for styling

function SocialMediaCards() {
  return (
    <div className="social-media-card">
      <div className="social-media-icon">
        <img src="twitter.png" alt="X" />
        <a href="https://twitter.com/diprjk?s=20">X</a>
      </div>
      <div className="social-media-icon">
        <img src="facebook.png" alt="Facebook" />
        <a href="https://www.facebook.com/OfficeOfLGJandK">Facebook</a>
      </div>
      <div className="social-media-icon">
        <img src="instagram.png" alt="Instagram" />
        <a href="https://www.instagram.com/officeoflgjandk/?hl=en">Instagram</a>
      </div>
    </div>
  );
}

export default SocialMediaCards;
