

// src/components/Footer.js

import React from 'react';
import './Footer.css'; // Import your CSS file
import x from './x.png'
import y from './facebook.png'
import z from './instagram.jpeg'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-social">
      <div className="social-media-card">
      <div className="social-media-icon">
        
        <a href="https://twitter.com/diprjk?s=20"><img src={x} alt="X" /></a>
      </div>
      <div className="social-media-icon">
        
        <a href="https://www.facebook.com/OfficeOfLGJandK"><img src={y} alt="Facebook" /></a>
      </div>
      <div className="social-media-icon">
       
        <a href="https://www.instagram.com/officeoflgjandk/?hl=en"> <img src={z} alt="Instagram" /></a>
      </div>
    </div>
      </div>
      <div className="footer-links">
        <a href="/about">About Us</a>
        <a href="/contact">Contact Us</a>
        <a href="/terms">Terms of Service</a>
        <a href="/privacy">Privacy Policy</a>
      </div>
      <div className="footer-newsletter">
        <p>Subscribe to our monthly newsletter:</p>
        <div className="newsletter-form">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

