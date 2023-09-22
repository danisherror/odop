// src/components/BlogPage.js

import React from 'react';
import './kani.css';
import Navbar from '../Navbar/Navbar';

function BlogPage() {
  return (
    <>
    <Navbar />
    <div className='asdas'>

    </div>
    <div className="blog-container">
      <header>
        <h1>Kani Shawl from Shopian</h1>
      </header>
      <main>
        <article className="blog-post">
          <h2>The Art of Kani Shawls</h2>
          <p>
            Shopian, a picturesque district in Jammu and Kashmir, is renowned
            for its exquisite Kani shawls. The Kani shawl is a masterpiece of
            craftsmanship, woven with intricate patterns and vibrant colors,
            making it a symbol of traditional artistry and culture in the
            region.
          </p>
          {/* Add more content here */}
        </article>
        {/* Add more articles as needed */}
      </main>
    </div>
    </>
  );
}

export default BlogPage;