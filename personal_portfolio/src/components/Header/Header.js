import React from "react";
import './Header.css';
import myProfilePic from './Images/profile_pic.jpg';

function Header() {
    return (
        <header className="header">
            <div className="profile">
                <img
                    className="profile-picture"
                    src={myProfilePic}
                    alt="Bosit-Anvarov"
                />
            </div>
            <nav className="navigation">
                <ul className="nav-list">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header
