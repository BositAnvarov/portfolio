import React from 'react';
import './Footer.css'; // Import your CSS file for styling



function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-container'>

        <div className='footer-data'>
          <h2 className='footer-title'>Abdulbosit Anvarov</h2>
          <p className='footer-text'>&copy; {new Date().getFullYear()}</p>
        </div>

        <div className='footer-data'>
          <h2 className='footer-title'>EXPLORE</h2>
          <ul className='footer-text'>
            <li><a href="#home" className='footer-link'>HOME</a></li>
            <li><a href="#skills" className='footer-link'>SKILLS</a></li>
            <li><a href="#achievements" className='footer-link'>ACHIEVEMENTS</a></li>
            <li><a href="#contact" className='footer-link'>CONTACT</a></li>
          </ul>
        </div>

        <div className='footer-data'>
          <h2 className='footer-title'>FOLLOW</h2>
          <ul className='footer-text'>
            <li><a href="#LinkedIn">LinkedIn</a></li>
            <li><a href="#Github">GitHub</a></li>
            <li><a href="#Email">Email</a></li>
            <li><a href="#Phone">Phone</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
