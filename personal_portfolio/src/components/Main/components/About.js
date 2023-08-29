import React from "react";
import './About.css'; // Import your CSS file for styling

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import PDF from "../Resume.pdf"


function About() {
    return (
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
              <span>My Links </span>
              <FontAwesomeIcon icon={faArrowRight}/>
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
              MY RESUME
            </h2>
            <a href={PDF} target='_blank'  rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faFileLines} className='resume-file' />
            </a>
          </div>
        </div>
      </section>
    );
};

export default About;
