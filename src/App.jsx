import './App.css'

import styled from 'styled-components';

import Image from "./assets/images/Bkg.jpg"

// Componentes
import Button from './components/button'

const HeroStyled = styled.section`
  width: 100vw;
  height: 100vh;
  background-image: url(${Image});
  background-size: cover;
  background-position: center;

`;

function App() {

  return (
    <>
    <HeroStyled>
       <h1>aca vendria la data</h1>
      <Button>reproducir </Button>
    </HeroStyled>
     
    </>
  )
}

export default App
