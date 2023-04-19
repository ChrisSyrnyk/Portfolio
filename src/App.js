import { useState } from 'react';
import styles from './styles.css';
import About from './components/About.js';
import Skills from './components/Skills.js';
import Projects from './components/Projects';
import Name from './components/Name';
import Contact from './components/Contact';

function App() {
  

  return (
    <>
    <Name/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    </>
  );
}

export default App;
