import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './Projects.css';
import './Modal.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPlane, faRoad, faNoteSticky, faPersonWalking } from "@fortawesome/free-solid-svg-icons";

// Define an array of project data
const projectsData = [
  {
    title: "Airport Management System",
    icon: faPlane,
    githubLink: "https://github.com/BositAnvarov/airport_clone",
    youtubeLink: "/#soon",
    technologies: ["C++", "PostgreSQL", "libpqxx API", "OOP", "Git"],
    description: "This app enhances airport operations with a user-friendly interface and PostgreSQL database access through a C++ API.",
    detailedDescription: `
      This app is designed to provide a user-friendly system for airport employees to track flights and assist customers with finding available flights and relevant details such as airline, meal plans, and space left on a flight.
      <br><br>The app includes a PostgreSQL database schema and an official C++ API libpqxx that allows airport employees to interact with the database. The API's user interface includes a list of commands that airport employees can use to retrieve information about flights, update flight information, and insert new information such as creating new flights, adding passengers, and adding cargo.
      <br><br>Overall, this app aims to improve the customer experience at the airport by enabling airport employees to more easily and efficiently track flights and assist customers with finding available flights and relevant details.
      `,
  },
  {
    title: "Road Sign Detector",
    icon: faRoad,
    githubLink: "https://github.com/BositAnvarov/ComputerVision/tree/main/RoadSign-Detector",
    youtubeLink: "/#soon",
    technologies: ["C++", "OpenCV", "OOP", "Git"],
    description: "A road sign detector capable of accurately categorizing signs into various types, including regulatory, warning, and others.",
    detailedDescription: `
      A road object detection system was created to spot American regulatory signs (like Traffic Lights, Stop Signs, Pedestrian Signs, and Speed Limit Signs) using image recognition. It was built using OpenCV and C++ on Windows OS. The goal was to boost road safety by spotting these signs in real-time, making city transportation safer.
      <br><br>One cool feature was its ability to find multiple signs at once without any intensive training. Instead, it used the signs' HSV (Hue, Saturation, and Value) values to identify them, making it adaptable to various traffic situations. This made the system flexible and effective for enhancing road safety and traffic management.
    `,
  },
  {
    title: "SmartNotes.py",
    icon: faNoteSticky,
    githubLink: "https://github.com/BositAnvarov/",
    youtubeLink: "/#soon",
    technologies: ["Python", "Django", "SQLite3", "BootStrap", "HTTP"],
    description: "This project enables users to easily create, update, and access notes for future reference and organization.",
    detailedDescription: `
      The SmartNotes project is a Python-based application that allows users to create, update, delete, and retrieve notes for future reference. 
      <br><br>It employs HTTP protocols and a Django database to store user-generated notes, managing user accounts to enable them to access their previously saved notes and create new ones once logged in. 
      <br><br>Additionally, the project utilizes Bootstrap to create a user-friendly frontend interface.
    `,
  },
  {
    title: "Fitness Daily (ongoing)",
    icon: faPersonWalking,
    githubLink: "/#soon",
    youtubeLink: "/#soon",
    technologies: ["Java", "SpringBoot", "React.js", "PostgreSQL", "Azure", "Docker", "REST API", "Postman"],
    description: "A fitness app that provides personalized workout plans, calorie tracking, nutrition monitoring, and exercise management.",
    detailedDescription: `
      This comprehensive fitness application is designed to provide users with personalized workout plans, precise calorie tracking, nutrition monitoring, and efficient exercise management. To ensure a consistent development environment, Docker is used to containerize PostgreSQL, facilitating seamless development and deployment processes.
      <br><br>The user interface is crafted with React, focusing on delivering an intuitive and user-friendly experience. On the backend, Spring Boot is employed, backed by Hibernate for efficient communication with the PostgreSQL database. This combination of technologies ensures that users have access to a robust and responsive fitness app that caters to their specific needs and goals, from workouts to nutrition, all within a reliable and consistent environment.
    `,
  },
];

function Projects() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);


  // Add a CSS class to the body element when the modal is open
  useEffect(() => {
    if (modalIsOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [modalIsOpen]);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalIsOpen(false);
  };

  Modal.setAppElement('#root'); // Replace with the root element of your app

  return (
    <section className="projects section" id="projects">
      <h2 className="section-title">Projects</h2>

      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div className="project-box" key={index}>
            <div className="project-image-placeholder">
              <div className="project-logo" onClick={() => openModal(project)}>
                <FontAwesomeIcon icon={project.icon} className={`project-pic ${project.icon}`} />
              </div>
            </div>

            <div className="project-content">
              <div className="project-header">
                <h4>{project.title}</h4>
                <div className="project-line"></div>
                <a href={project.githubLink}>
                  <FontAwesomeIcon icon={faGithub} className="project-social" />
                </a>
                <a href={project.youtubeLink}>
                  <FontAwesomeIcon icon={faYoutube} className="project-social" />
                </a>
              </div>

              <div className="project-tech">
                <div className="project-tools">
                  {project.technologies.map((tech, techIndex) => (
                    <span className="tool-box" key={techIndex}>{tech}</span>
                  ))}
                </div>
              </div>

              <div className="project-body">
                <p className="project-desc">
                  {project.description}
                  <span onClick={() => openModal(project)}>Learn more {">"}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Project Details"
          className="modal" // Add your modal class here
          overlayClassName={"modal-overlay"}
        >
          <div className="modal-content">
            <div className="modal-logo" onClick={() => openModal(selectedProject)}>
              <FontAwesomeIcon icon={selectedProject.icon} />
            </div>

            <div className='modal-desc'>

              <h2>{selectedProject.title}</h2>

              <div className="project-tech">
                <div className="project-tools">
                  {selectedProject.technologies.map((tech, techIndex) => (
                    <span className="modal-tool-box" key={techIndex}>{tech}</span>
                  ))}
                </div>
              </div>

              <p dangerouslySetInnerHTML={{ __html: selectedProject.detailedDescription }}></p>


              <h3>Project Links <span>.</span></h3>
              <a href={selectedProject.githubLink} className="modal-social">
                <FontAwesomeIcon icon={faGithub}  /> source link 
              </a>
              <a href={selectedProject.youtubeLink} className="modal-social">
                <FontAwesomeIcon icon={faYoutube}  /> live project
              </a>

              <button className="modal-close-button" onClick={closeModal}>
                X
              </button>
            </div>

          </div>
        </Modal>
      )}
    </section>
  );
}

export default Projects;
