import React from 'react';
import './Footer.css'; // Import your CSS file for styling

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-container'>

        <div className='footer-data'>
          <h2 className='footer-title'>Abdulbosit Anvarov</h2>
          <p className='footer-text'>
            Copyright &copy; {new Date().getFullYear()}
          </p>
        </div>

        <div className='footer-data'>
          <h2 className='footer-title'>EXPLORE</h2>
          <ul className='footer-text'>
            <li><a href="#home" className='footer-link'>Home</a></li>
            <li><a href="#about" className='footer-link'>About</a></li>
            <li><a href="#skills" className='footer-link'>Skills</a></li>
            <li><a href="#achievements" className='footer-link'>Achievements</a></li>
            <li><a href="#projects" className='footer-link'>Projects</a></li>
            <li><a href="#contact" className='footer-link'>Contact</a></li>
          </ul>
        </div>

        <div className='footer-data'>
          <h2 className='footer-title'>FOLLOW</h2>
          <p className='footer-text'>
            <a href="https://www.linkedin.com/in/abdulbosit-anvarov/" className="socials">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://github.com/BositAnvarov" className="socials">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
