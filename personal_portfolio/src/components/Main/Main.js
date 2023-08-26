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
        <div className='about-container'>
          <div class="about-content">
            <h2>About Me</h2>
            <p>
              Welcome to my personal website! I'm passionate about [your interests or profession] and love to [briefly describe what you do or your interests].
            </p>
            <p>
              [Add more information about yourself, such as your background, education, and experience. You can use multiple paragraphs or list items as needed.]
            </p>
            <p>
              In my free time, I enjoy [mention your hobbies or activities]. Feel free to explore my website to learn more about me and my work.
            </p>
          </div>
          
          <div class="about-image">
            <img src="your-image.jpg" alt="Your Name" />
          </div>
        </div>
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
