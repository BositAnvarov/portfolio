import React from 'react';
import './Footer.css'; // Import your CSS file for styling

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub} from "@fortawesome/free-brands-svg-icons";
import { Link } from 'react-scroll';

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
            <li>
              <Link to="home" spy={true} smooth={true} offset={0} duration={500} className='footer-link'>Home</Link>
            </li>
            <li>
              <Link to="about" spy={true} smooth={true} offset={0} duration={500} className='footer-link'>About</Link>
            </li>
            <li>
              <Link to="skills" spy={true} smooth={true} offset={0} duration={500} className='footer-link'>Skills</Link>
            </li>
            <li>
              <Link to="projects" spy={true} smooth={true} offset={0} duration={500} className='footer-link'>Projects</Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true} offset={0} duration={500} className='footer-link'>Contact</Link>
            </li>
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
