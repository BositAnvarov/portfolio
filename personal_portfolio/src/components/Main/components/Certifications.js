import React from "react";
import './Certifications.css'; // Import your CSS file for styling
import aws_practitioner from '../Images/certificate_images/aws_practitioner.png';
import az900 from '../Images/certificate_images/az-900.png';
import comptia_network from '../Images/certificate_images/comptia_network.png';
import aws_solutions_architect from '../Images/certificate_images/aws_solutions_architect.png';
import linkedin from '../Images/certificate_images/linked_in.png';
import lambdatest from '../Images/certificate_images/lambdatest.png';

function Certifications() {
  const certificationsData = [
    {
      title: "AZ-900",
      logo: az900,
      progress: 80,
      description: "This is a description of the Microsoft Certification.",
    },
    {
      title: "AWS Practitioner",
      logo: aws_practitioner,
      progress: 90,
      description: "This is a description of the Amazon Certification.",
    },
    {
      title: "CompTia Network+",
      logo: comptia_network,
      progress: 75,
      description: "This is a description of the CompTia Certification.",
    },
    {
      title: "Solutions Architect",
      logo: aws_solutions_architect,
      progress: 75,
      description: "This is a description of the CompTia Certification.",
    },
    {
      title: "Test Automation",
      logo: lambdatest,
      progress: 75,
      description: "This is a description of the Scrum Master Certification.",
    },
    {
      title: "DevOps",
      logo: linkedin,
      progress: 75,
      description: "This is a description of the Scrum Master Certification.",
    },
    {
      title: "Agile",
      logo: linkedin,
      progress: 75,
      description: "This is a description of the Scrum Master Certification.",
    },
    {
      title: "Scrum Master",
      logo: linkedin,
      progress: 75,
      description: "This is a description of the Scrum Master Certification.",
    }
    // Add more certifications as needed
  ];

  return (
    <section className='certifications section' id='skills'>
      <h2 className='section-title'>Certifications</h2>

      <div className='certifications-container'>
        {certificationsData.map((certification, index) => (
          <div className='certifications-content' key={index}>
            <h2 className='certifications-subtitle'>
              {certification.title}
            </h2>
            <img src={certification.logo} alt={certification.title} className="logo"/>
            <div className='progress-container'>
              <progress value={certification.progress} max="100"></progress>
              <div className='certifications-progress'>
                {certification.progress}% Complete
              </div>
            </div>
            <button className='see-more-button'>
              See More Details
            </button>
            <p className='certification-description'>
              {certification.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
