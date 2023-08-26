import React from "react";
import './Header.css';
import myProfilePic from './Images/profile_pic.jpg';

function Header() {
    return (
        <header className='header'>
            <nav className="nav-bar">
                <div>
                    <a href="/#top" className="nav-logo">
                        <img
                            className="profile-picture"
                            src={myProfilePic}
                            alt="Bosit-Anvarov"
                        />
                    </a>
                </div>

                <div className="nav-menu">
                    <ul className="nav-list">
                        <li className="nav-item"><a href="#home">Home</a></li>
                        <li className="nav-item"><a href="#about">About</a></li>
                        <li className="nav-item"><a href="#skills">Skills</a></li>
                        <li className="nav-item"><a href="#projects">Projects</a></li>
                        <li className="nav-item"><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header
