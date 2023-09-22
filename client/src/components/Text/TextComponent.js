// src/components/TextContent.js

import React from 'react';

const textStyle = {
  textAlign: 'center',
  padding: '20px',
  backgroundColor: 'rgb(255, 240, 225)', // Warm white background color
  lineHeight: '1.3',
};

const buttonStyle = {
  backgroundColor: 'red',
  color: 'white',
  padding: '10px 20px',
  borderRadius: '5px',
  cursor: 'pointer',
  display: 'inline-flex',
  alignItems: 'center',
};

const arrowStyle = {
  marginLeft: '10px',
};

function TextContent() {
  return (
    <div style={textStyle}>
      <h2>
        Welcome to the Official Website of <br />"One District-One Product",
        Jammu and Kashmir
      </h2>
      <p>
        The J&K Government’s One District-One Product Programme aims to encourage such indigenous and specialized products and crafts in J&K that are found nowhere else – like the Kashmir Pashmina Shawl, Pulwama's Saffron, world-famous Basholi paintings and Kani shawls of Kashmir, and Rajouri's chikri wood craft that recently got GI tag making it 9th product from the union territory which has got GI tag.
      </p>
      <div style={{ textAlign: 'center' }}>
        <button style={buttonStyle}>
          Read More
          <span style={arrowStyle}>➔</span>
        </button>
      </div>
    </div>
  );
}

export default TextContent;
