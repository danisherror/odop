import React from 'react';
import './CardGrid.css'; // Import your CSS file for styling
import walnut from './images/Walnut_anantnag.jpg';
import pashmina from './images/pashmina kashmir.jpg';
import saffron from './images/saffron.webp';
import papier from './images/papier mache kashmir.webp';
import kani from './images/kani shawl kahmir.jpg';
import carpet from './images/carpet baramulla.jpg';
import basholi from './images/basohli-painting.jpg';
import img1 from './images/img1 .jpeg';
import img2 from './images/img2.jpg';

function CardGrid() {
  const cardData = [
    {
      image: walnut,
      caption: 'Walnuts of Kupwara',
      url1:"http://localhost:3000/walnut"
    },
    {
      image: pashmina,
      caption: 'Pashmina From Srinagar',
      url1:"http://localhost:3000/pashmina"
    },
    {
      image: saffron,
      caption: 'Saffron From Pulwama',
      url1:"http://localhost:3000/saffron"
    },
    {
      image: papier,
      caption: 'Papier Mache From Budgam',
      url1:"http://localhost:3000/papier"
    },
    {
      image: kani,
      caption: 'Kani Shawl From Shopian',
      url1:"http://localhost:3000/kani"
    },
  ];

  const headingStyle = {
    backgroundColor: '#f0f0f0', // Background color for the heading
    padding: '20px',
    textAlign: 'center',
  };

  return (
    <div>
      <h2 style={headingStyle}>District-Wise Selected Products</h2>
      <div className="card-grid">
        {cardData.map((card, index) => (
          <div key={index} className="card">
            <a href={card.url1}>
            <img src={card.image} alt={`Card ${index + 1}`} />
            <p>{card.caption}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardGrid;
