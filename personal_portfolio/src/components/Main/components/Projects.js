import React from "react";
import './Projects.css'; // Import your CSS file for styling

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPlane, faRoad, faNoteSticky, faPersonWalking} from "@fortawesome/free-solid-svg-icons";
import {faGithub, faYoutube} from "@fortawesome/free-brands-svg-icons";


function Projects() {
    return(
      <section className='projects section' id='projects'>
        <h2 className='section-title'>
          Projects
        </h2>

        <div className='projects-container'>

          {/* Project 1 */}
          <div className='project-box'>
            <div className='project-image-placeholder'>
              <div class="project-logo">
                <FontAwesomeIcon icon={faPlane} className='plane project-pic'/>
              </div>
            </div>
          
            <div className='project-content'>
              <div className='project-header'>
                <h4>
                  Airport Management System
                </h4>

                <div className='project-line'></div>
                <a href="https://github.com/BositAnvarov/airport_clone">
                  <FontAwesomeIcon icon={faGithub} className='project-social'/>
                </a>
                <a href="/#soon">
                  <FontAwesomeIcon icon={faYoutube} className='project-social'/>
                </a>
              </div>

              <div class="project-tech">
                <div class="project-tools">
                  <span class="tool-box">C++</span>
                  <span class="tool-box">PostgreSQL</span>
                  <span class="tool-box">"libpqxx" API</span>
                  <span class="tool-box">OOP</span>
                  <span class="tool-box">Git</span>
                </div>
              </div>

              <div className='project-body'>
                <p className='project-desc'>
                This app enhances airport operations with a user-friendly interface and PostgreSQL database access through a C++ API.
                <span>Learn more {">"}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className='project-box'>
            <div className='project-image-placeholder'>
              <div class="project-logo">
                <FontAwesomeIcon icon={faRoad} className='road project-pic'/>
              </div>
            </div>
          
            <div className='project-content'>
              <div className='project-header'>
                <h4>
                  Road Sign Detector
                </h4>

                <div className='project-line'></div>
                <a href="https://github.com/BositAnvarov/ComputerVision/tree/main/RoadSign-Detector">
                  <FontAwesomeIcon icon={faGithub} className='project-social'/>
                </a>
                <a href="/#soon">
                  <FontAwesomeIcon icon={faYoutube} className='project-social'/>
                </a>
              </div>

              <div class="project-tech">
                <div class="project-tools">
                  <span class="tool-box">C++</span>
                  <span class="tool-box">OpenCV</span>
                  <span class="tool-box">OOP</span>
                  <span class="tool-box">Git</span>
                </div>
              </div>

              <div className='project-body'>
                <p className='project-desc'>
                  A road sign detector capable of accurately categorizing signs into various types, including regulatory, warning, and others.
                  <span>Learn more {">"}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className='project-box'>
            <div className='project-image-placeholder'>
              <div class="project-logo">
                <FontAwesomeIcon icon={faNoteSticky} className='note project-pic'/>
              </div>
            </div>
          
            <div className='project-content'>
              <div className='project-header'>
                <h4>
                  SmartNotes.py
                </h4>

                <div className='project-line'></div>
                <a href="https://github.com/BositAnvarov/airport_clone">
                  <FontAwesomeIcon icon={faGithub} className='project-social'/>
                </a>
                <a href="/#soon">
                  <FontAwesomeIcon icon={faYoutube} className='project-social'/>
                </a>
              </div>

              <div class="project-tech">
                <div class="project-tools">
                  <span class="tool-box">Python</span>
                  <span class="tool-box">Django</span>
                  <span class="tool-box">SQLite3</span>
                  <span class="tool-box">BootStrap</span>
                  <span class="tool-box">HTTP</span>
                </div>
              </div>

              <div className='project-body'>
                <p className='project-desc'>
                This project enables users to easily create, update, and access notes for future reference and organization.
                  <span>Learn more {">"}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className='project-box'>
            <div className='project-image-placeholder'>
              <div class="project-logo">
                <FontAwesomeIcon icon={faPersonWalking} className='fitness project-pic'/>
              </div>
            </div>
          
            <div className='project-content'>
              <div className='project-header'>
                <h4>
                  Fitness Daily (ongoing)
                </h4>

                <div className='project-line'></div>
                <a href="https://github.com/BositAnvarov/airport_clone">
                  <FontAwesomeIcon icon={faGithub} className='project-social'/>
                </a>
                <a href="/#soon">
                  <FontAwesomeIcon icon={faYoutube} className='project-social'/>
                </a>
              </div>

              <div class="project-tech">
                <div class="project-tools">
                  <span class="tool-box">Java</span>
                  <span class="tool-box">SpringBoot</span>
                  <span class="tool-box">React.js</span>
                  <span class="tool-box">PostgreSQL</span>
                  <span class="tool-box">Azure</span>
                  <span class="tool-box">Docker</span>
                  <span class="tool-box">REST API</span>
                  <span class="tool-box">Postman</span>
                </div>
              </div>

              <div className='project-body'>
                <p className='project-desc'>
                  A fitness app that provides personalized workout plans, calorie tracking, nutrition monitoring, and exercise management.
                  <span>Learn more {">"}</span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    );
}
export default Projects;