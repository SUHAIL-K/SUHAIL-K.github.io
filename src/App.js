import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Link, animateScroll as scroll } from "react-scroll";
import Intro from './components/Intro';
import { Box } from '@chakra-ui/react';
import AboutMe from './components/AboutMe';
import Work from './components/Work';
import TechSkill from './components/TechSkill';

function App() {
  return (
    <Box className="App"
    backgroundColor={'csdark'}
    paddingBottom='100px'
    >
    <Navbar>

    </Navbar>
    <Intro></Intro>
    <AboutMe></AboutMe>
    <Work></Work>
    <TechSkill></TechSkill>
    </Box>
  );
}

export default App;
