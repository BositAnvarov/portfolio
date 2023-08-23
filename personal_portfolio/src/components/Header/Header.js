import React from "react";
import './Header.css';
import myProfilePic from './Images/profile_pic.jpg';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import { faPhone} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";




function Header() {
    // Function to handle smooth scrolling to the top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // This makes it scroll smoothly
        });
    };

    return (
        <header className="header">
            <div className="profile-container">
                {/* onClick event to the anchor tag */}
                <a href="/#top" onClick={scrollToTop}>
                    <img
                        className="profile-picture"
                        src={myProfilePic}
                        alt="Bosit-Anvarov"
                    />
                </a>
            </div>
            <div className="navigation-container">
                <nav className="navigation">
                    <ul className="nav-list">
                        <li><a href="#home">HOME</a></li>
                        <li><a href="#skills">SKILLS</a></li>
                        <li><a href="#achievements">ACHIEVEMENTS</a></li>
                        <li><a href="#contact">CONTACT</a></li>
                    </ul>
                </nav>
            </div>
            <div className="social-container">
                <a href="https://www.linkedin.com/in/abdulbosit-anvarov/" className="linkedin">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/BositAnvarov" className="github">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="tel:+14254298851" className="phone">
                    <FontAwesomeIcon icon={faPhone} />
                </a>
                <a href="mailto:bosit11@uw.edu" className="email">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
            </div>
        </header>
    );
}

export default Header
