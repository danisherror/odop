import React from 'react';
import logo1 from './cfc.png';
import logo2 from './skill.png';
import logo3 from './finance.png';

const odopStyle = {
  textAlign: 'center',
  padding: '20px',
};

const headingStyle = {
  fontSize: '24px',
  marginBottom: '20px',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '20px', // Add gap between buttons
};

const buttonStyle = {
  border: '1px solid #ccc',
  padding: '10px',
  maxWidth: '200px',
  display: 'flex',
  flexDirection: 'column', // Arrange content vertically
  alignItems: 'center', // Center-align content horizontally
  textDecoration: 'none', // Add text decoration for links
  color: '#333', // Text color for links
};

const logoStyle = {
  maxWidth: '100px',
  marginBottom: '10px', // Add space below the logo
};

function ODOPScheme() {
  return (
    <div style={odopStyle}>
      <h2 style={headingStyle}>ODOP Scheme</h2>
      <div style={buttonContainerStyle}>
        <div style={buttonStyle}>
          <a href="link1.html">
            <img src={logo1} alt="Logo 1" style={logoStyle} />
            <p>CFC Scheme</p>
          </a>
        </div>
        <div style={buttonStyle}>
          <a href="link2.html">
            <img src={logo2} alt="Logo 2" style={logoStyle} />
            <p>Skill Development</p>
          </a>
        </div>
        <div style={buttonStyle}>
          <a href="link3.html">
            <img src={logo3} alt="Logo 3" style={logoStyle} />
            <p>Finance</p>
          </a>
        </div>
        {/* Add more buttons with links as needed */}
      </div>
    </div>
  );
}

export default ODOPScheme;
