import { useState } from 'react';
import styles from './styles.css'
import About from './components/About.js'
import Skills from './components/Skills.js'
import Projects from './components/Projects';
import Name from './components/Name';

function App() {
  

  return (
    <>
    <Name/>
    <About/>
    <Skills/>
    <Projects/>
    <div className='half-page-column-container'>
      <div className='title-container'>
        <div className='line'/>
        <div className='title'>Contact</div>
        <div className='line'/>
      </div>
      <div className='filler'>ChristopherSyrnyk2@ucalgary.ca</div>
    </div>


    </>
  );
}

export default App;
