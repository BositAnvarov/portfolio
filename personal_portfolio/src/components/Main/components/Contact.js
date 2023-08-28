import React from "react";
import './Contact.css'; // Import your CSS file for styling

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPhone, faEnvelope} from "@fortawesome/free-solid-svg-icons";


function Contact() {
    return(
      <section className='contact' id='contact'>
        <h2 className='section-title'>
          Contact
        </h2>

        <div className='contact-container'>
          <div className='contact-content'>
            <a href='mailto:abdulbosit2002@gmail.com' className='contact-items'>
              <FontAwesomeIcon icon={faEnvelope} /> 
            </a>
            <h3>
              Send me an Email: abdulbosit2002@gmail.com
            </h3>
          </div>

          <div className='contact-content' >
            <a href='#phone;' className='contact-items'>
              <FontAwesomeIcon icon={faPhone} /> 
            </a>
            <h3>
              Give me a call: +1(425) 429-8851
            </h3>
          </div>
        </div>
      </section>
    );
}

export default Contact;