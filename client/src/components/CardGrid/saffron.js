// src/components/BlogPage.js

import React from 'react';
import './saffron.css';
import Navbar from '../Navbar/Navbar';

function BlogPage() {
  return (
    <>
    <Navbar />
    <div className='asdas'>

</div>
    <div className="blog-container">
      <header>
        <h1>Saffron Blog</h1>
      </header>
      <main>
        <article className="blog-post">
          <h2>Benefits of Saffron</h2>
          <p>
            Saffron is a highly prized spice known for its distinct flavor and
            numerous health benefits. It is often used in cooking to add color
            and flavor to dishes, but it also has several medicinal properties.
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