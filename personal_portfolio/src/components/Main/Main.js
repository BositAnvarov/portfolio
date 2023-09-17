import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certifications from './components/Certifications';
import './Main.css'; // Import your CSS file for styling

function Main() {
  return (
    <main className='main'>
      {/* Home Component */}
      <Home />

      {/* About Component */}
      <About />

      {/* Skills Component */}
      <Skills />

      {/* Projects Component */}
      <Projects />

      {/* Certifications & Achievements component*/}
      <Certifications />

      {/* Contact Component */}
      <Contact />
    </main>
  );
}

export default Main;
