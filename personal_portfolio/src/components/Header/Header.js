import React from "react";
import './Header.css';

import {Link} from 'react-scroll'

function Header() {
    return (
        <header className='header'>
            <nav className="nav-bar">
                <div>
                    <Link to="home" spy={true} smooth={true} offset={0} duration={500} className="nav-logo">
                        Abdulbosit Anvarov
                    </Link>
                </div>

                <div className="nav-menu">
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to="home" 
                            spy={true} 
                            smooth={true} 
                            offset={0} 
                            duration={500} 
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="about"
                            spy={true}
                            smooth={true} 
                            offset={0} 
                            duration={500} 
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="skills" 
                            spy={true} 
                            smooth={true} 
                            offset={0} 
                            duration={500} 
                            >
                                Skills
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="projects" 
                            spy={true} 
                            smooth={true} 
                            offset={0} 
                            duration={500} 
                            >
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="contact" 
                            spy={true} 
                            smooth={true} 
                            offset={0} 
                            duration={500} 
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header
