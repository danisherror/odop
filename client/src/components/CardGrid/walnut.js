// src/components/BlogPage.js

import React from 'react';
import './walnut.css';
import Navbar from '../Navbar/Navbar';
function BlogPage() {
  return (
    <>
    <Navbar />
    <div className='asdas'>

</div>
   
    <div className="blog-container">
      <header>
        <h1>Walnuts from Kupwara</h1>
      </header>
      <main>
        <article className="blog-post">
          <h2>The Beauty of Kupwara Walnuts</h2>
          <p>
            Kupwara, a picturesque region in Jammu and Kashmir, is known for its
            breathtaking landscapes and, of course, its delicious walnuts. The
            walnuts grown here are not only a treat for the taste buds but also
            come with a rich history and numerous health benefits.
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