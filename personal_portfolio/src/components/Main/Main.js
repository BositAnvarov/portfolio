import React from 'react';
import './Home.css'; // Import your CSS file for styling
import './About.css'; // Import your CSS file for styling
import './Main.css'; // Import your CSS file for styling
import './Skills.css'; // Import your CSS file for styling
import './Projects.css'; // Import your CSS file for styling
import './Contact.css'; // Import your CSS file for styling


import gradPic from './Images/Gradutation.jpg';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faFileLines, faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub} from "@fortawesome/free-brands-svg-icons";
import {Link} from 'react-scroll'




function Main() {
  return (
    <main className='main'>
      
      {/* HOME */}
      <section className='home' id='home'>
        <div className='home-container'>
          <h1 className='home-title'>
            <span className='aspiring'>Aspiring </span>
            <br/>
            <span className='software'>Software</span>
            <br/>
            Engineer. 
          </h1>
          <div className='home-scroll'>
            <Link to="about" spy={true} smooth={true} offset={0} duration={500} className='home-scroll-link'>
              <FontAwesomeIcon icon={faArrowUp} /> explore 
            </Link>
          </div>
          <img 
            src={gradPic}
            className='home-img'
            alt='Gradutation'
          />
        </div>
      </section>

      {/* ABOUT */}
      <section className='about section' id='about'>
        <h2 className='section-title'>
          About 
        </h2>

        <div className='about-container'>
          <div className='about-content'>
            <h2 className='about-subtitle name'>
              Abdulbosit Anvarov 
            </h2>
            <span className='about-text'>
              <p>
              Tech Enthusiast -{'>'} Fresh Graduate 
              <br/>
              <br/>
              Eager to be inspired, I'm captivated by technology, design and meaningful interactions. 
              I believe in working hard and surrounding myself with like-minded individuals.
              <br/>
              <br/>  
              With a passion for creating elegant software solutions, and a degree in Computer Science from the University of Washington, 
              I'm prepared to embark my journey as a software engineer! 
              <br/>
              <br/>
              <a href="https://www.linkedin.com/in/abdulbosit-anvarov/">
                <FontAwesomeIcon icon={faLinkedinIn} className='social'/>
              </a>
              <a href="https://github.com/BositAnvarov">
                <FontAwesomeIcon icon={faGithub} className='social'/>
              </a>
              </p>
            </span>
          </div>

          <div className='about-logo'> 
            <h2 className='about-subtitle'>
              RESUME
            </h2>
            <a href='#resume' >
              <FontAwesomeIcon icon={faFileLines} className='resume-file'/>
            </a>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className='skills section' id='skills'>
        <h2 className='section-title'>
          Skills
        </h2>

        <div className='skills-container'>

          <div className='skills-content'>
            <h2 className='skills-subtitle'>
              Programming Languages
            </h2>

            <div className='skills-items'>
              <span className='skills-name'>Java</span>
              <span className='skills-name'>Python</span>
              <span className='skills-name'>C++</span>
              <span className='skills-name'>C#</span>
              <span className='skills-name'>JavaScript</span>
            </div>
          </div>

          <div className='skills-content'>
            <h2 className='skills-subtitle'>
              Developer Tools
            </h2>

            <div className='skills-items'>
              <span className='skills-name'>HTML5</span>
              <span className='skills-name'>CSS</span>
              <span className='skills-name'>React.js</span>
              <span className='skills-name'>Django</span>
              <span className='skills-name'>Spring Boot</span>
              <span className='skills-name'>.NET</span>
              <span className='skills-name'>Node.js</span>
              <span className='skills-name'>BootStrap</span>
              <span className='skills-name'>PostgreSQL</span>
              <span className='skills-name'>SQL Server</span>
              <span className='skills-name'>Hibrenate</span>
              <span className='skills-name'>Git</span>
              <span className='skills-name'>OpenCV</span>
              <span className='skills-name'>Jupyter Notebook</span>
              <span className='skills-name'>Hugging Face</span>
              <span className='skills-name'>REST API</span>
              <span className='skills-name'>Azure</span>
            </div>
          </div>

          <div className='skills-content'>
            <h2 className='skills-subtitle'>
              Software Engineering 
            </h2>

            <div className='skills-items'>
              <span className='skills-name'>Maven</span>
              <span className='skills-name'>HTTP</span>
              <span className='skills-name'>Postman</span>
              <span className='skills-name'>oAuth 2.0</span>
              <span className='skills-name'>Docker</span>
              <span className='skills-name'>Azure DevOps</span>
              <span className='skills-name'>CI/CD</span>
              <span className='skills-name'>Agile Methodologies</span>
              <span className='skills-name'>Object-Oriented Programming {'('}OOP {')'}</span>
              <span className='skills-name'>Design Patterns</span>
              <span className='skills-name'>Linux</span>
              <span className='skills-name'>Windows</span>

            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className='projects section' id='projects'>
        <h2 className='section-title'>
          Projects
        </h2>

        <div className='about-container'>

        </div>
      </section>

      {/* CONTACT */}
      <section className='contact section' id='contact'>
        <h2 className='section-title'>
          Contact
        </h2>

        <div className='contact-container'>
          <div className='contact-content'>
            <a href='mailto:abdulbosit2002@gmail.com' className='contact-items'>
              <FontAwesomeIcon icon={faEnvelope} /> 
            </a>
            <h3>
              Send me an Email: abdulbosit2002@gmail.com
            </h3>
          </div>

          <div className='contact-content' >
            <a href='#phone;' className='contact-items'>
              <FontAwesomeIcon icon={faPhone} /> 
            </a>
            <h3>
              Give me a call: +1(425) 429-8851
            </h3>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
