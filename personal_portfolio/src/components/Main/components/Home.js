import React from "react";
import './Home.css'; // Import your CSS file for styling

import { Link } from "react-scroll";
import gradPic from '../Images/Gradutation.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";


function Home() {
    return (
        <section className="home" id="home">
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
    );
};

export default Home;
