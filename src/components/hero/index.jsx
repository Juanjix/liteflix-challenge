
import styled from "styled-components";

import Image from "../../assets/images/Bkg.png";

const HeroStyled = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url(${Image});
  background-size: cover;
  background-position: center;
`;

const Hero = () => {
  <HeroStyled/>
};

export default Hero;
