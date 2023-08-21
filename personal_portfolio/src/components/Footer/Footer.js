import React from 'react';
import './Footer.css'; // Import your CSS file for styling

function Footer() {
  return (
    <footer className='footerStyle'>
    &copy; {new Date().getFullYear()} Bosit Anvarov
    </footer>
  );
}

export default Footer;
