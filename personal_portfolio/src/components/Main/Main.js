import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
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

      {/* Contact Component */}
      <Contact />
    </main>
  );
}

export default Main;
