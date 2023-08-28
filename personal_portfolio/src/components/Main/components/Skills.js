import React from "react";
import './Skills.css'; // Import your CSS file for styling

function Skills() {
    return(
      <section className='skills section' id='skills'>
        <h2 className='section-title'>
          Skills
        </h2>

        <div className='skills-container'>

          <div className='skills-content'>
            <h2 className='skills-subtitle'>
              Programming Languages
            </h2>

            <div className='skills-items'>
              <span className='skills-name'>Java</span>
              <span className='skills-name'>Python</span>
              <span className='skills-name'>C++</span>
              <span className='skills-name'>C#</span>
              <span className='skills-name'>JavaScript</span>
            </div>
          </div>

          <div className='skills-content'>
            <h2 className='skills-subtitle'>
              Developer Tools
            </h2>

            <div className='skills-items'>
              <span className='skills-name'>HTML5</span>
              <span className='skills-name'>CSS</span>
              <span className='skills-name'>React.js</span>
              <span className='skills-name'>Django</span>
              <span className='skills-name'>Spring Boot</span>
              <span className='skills-name'>.NET</span>
              <span className='skills-name'>Node.js</span>
              <span className='skills-name'>BootStrap</span>
              <span className='skills-name'>PostgreSQL</span>
              <span className='skills-name'>SQL Server</span>
              <span className='skills-name'>Hibrenate</span>
              <span className='skills-name'>Git</span>
              <span className='skills-name'>OpenCV</span>
              <span className='skills-name'>Jupyter Notebook</span>
              <span className='skills-name'>Hugging Face</span>
              <span className='skills-name'>REST API</span>
              <span className='skills-name'>Azure</span>
            </div>
          </div>

          <div className='skills-content'>
            <h2 className='skills-subtitle'>
              Software Engineering 
            </h2>

            <div className='skills-items'>
              <span className='skills-name'>Maven</span>
              <span className='skills-name'>HTTP</span>
              <span className='skills-name'>Postman</span>
              <span className='skills-name'>oAuth 2.0</span>
              <span className='skills-name'>Docker</span>
              <span className='skills-name'>Azure DevOps</span>
              <span className='skills-name'>CI/CD</span>
              <span className='skills-name'>Agile Methodologies</span>
              <span className='skills-name'>Object-Oriented Programming {'('}OOP {')'}</span>
              <span className='skills-name'>Design Patterns</span>
              <span className='skills-name'>Linux</span>
              <span className='skills-name'>Windows</span>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Skills;