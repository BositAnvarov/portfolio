import React from 'react';
import './Home.css'; // Import your CSS file for styling
import './About.css'; // Import your CSS file for styling

import gradPic from './Images/Gradutation.jpg';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp} from "@fortawesome/free-solid-svg-icons";


function Main() {
  return (
    <main className='main'>
      
      {/* HOME */}
      <section className='home'>
        <div className='home-container'>
          <h1 className='home-title'>
            <span className='aspiring'>Aspiring</span>
            <br/>
            <span className='software'>Software</span>
            <br/>
            Engineer.
          </h1>
          <div className='home-scroll'>
            <a href='#about' className='home-scroll-link'>
              <FontAwesomeIcon icon={faArrowUp} /> explore
            </a>
          </div>
          <img 
            src={gradPic}
            className='home-img'
            alt='Gradutation'
          />
        </div>
      </section>

      {/* ABOUT */}
      <section className='about'>
        
      </section>

      {/* SKILLS */}
      <section className='skills'>
        
      </section>

      {/* ACHIEVEMENTS */}
      <section className='achievements'>
        
      </section>

      {/* PROJECTS */}
      <section className='projects'>
        
      </section>

      {/* CONTACT */}
      <section className='contact'>
        
      </section>
    </main>
  );
}

export default Main;
