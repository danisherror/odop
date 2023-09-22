// src/App.js

import React from 'react';
import Navbar from './components/Navbar/Navbar.js';
import ImageSlider from './components/ImageSlider/ImageSlider.js';
import TextContent from './components/Text/TextComponent.js';
import PhotoGallery from './components/PhotoGallery/PhotoGallery.js';
import ODOPScheme from './components/ODOPScheme/ODOPScheme.js';
import CardGrid from './components/CardGrid/CardGrid.js';
import Footer from './components/Footer/Footer.js'; // Import the Footer component
import 'font-awesome/css/font-awesome.min.css';
import Header from './components/header/Header.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar />
      <ImageSlider />
      <TextContent />
      <PhotoGallery />
      <ODOPScheme />
      <CardGrid />
    
      <Footer /> {/* Include the Footer component */}
      <div className="content">
        {/* Your webpage content goes here */}
      </div>
    </div>
  );
}

export default App;
