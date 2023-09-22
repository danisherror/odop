// src/components/BlogPage.js

import React from 'react';
import './papier.css';
import Navbar from '../Navbar/Navbar';

function BlogPage() {
  return (
    <>
    <Navbar />
    <div className='asdas'>

</div>
    <div className="blog-container">
      <header>
        <h1>Papier-Mâché from Budgam</h1>
      </header>
      <main>
        <article className="blog-post">
          <h2>The Art of Papier-Mâché</h2>
          <p>
            Budgam, a beautiful district in Jammu and Kashmir, is renowned for
            its exquisite papier-mâché craft. This traditional art form involves
            the use of paper pulp to create intricate and colorful decorative
            items, making it a unique and cherished craft in the region.
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