import React from 'react';
import styled from 'styled-components';
import logo1 from './odop.jpg';
import logo2 from './logo2.png';
import logo3 from './indialogo.jpeg';

const HeaderContainer = styled.div`
  background-color: #fff6e6;
  color: black; /* Set text color to black */
  padding: 30px 20px; /* Increased horizontal padding for better spacing */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 100px; /* Adjust logo size as needed */
`;

const CenterText = styled.div`
  font-weight: bold;
  font-size: 18px;
  color: black; /* Set text color to black */
`;

const SaffronText = styled.span`
  color: #FF9933; /* Saffron color */
`;

const WhiteText = styled.span`
  color: white; /* White text color */
`;

const GreenText = styled.span`
  color: #138808; /* Green color */
`;

const NavyBlueText = styled.span`
  color: navy; /* Navy blue color */
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo1} alt="ODOP Logo" />
      <CenterText>
        <h1>
          One District One Product <br />
          <SaffronText>JAMMU</SaffronText> <NavyBlueText>AND</NavyBlueText><GreenText> KASHMIR</GreenText>
        </h1>
      </CenterText>
      <div>
        <Logo src={logo3} alt="Logo 2" />
        <Logo src={logo2} alt="Logo 2" />
      </div>
    </HeaderContainer>
  );
}

export default Header;
