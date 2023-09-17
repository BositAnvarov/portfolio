import React from "react";
import './Contact.css'; // Import your CSS file for styling

import ContactForm from "./ContactForm";


function Contact() {
    return(
      <section className='contact' id='contact'>
        <h2 className='section-title'>
          Contact
        </h2>

        <div className='contact-container'>
          <div className='contact-content'>
            <h3>
              EMAIL ME {'-------->'}
            </h3>
            <h2>

            </h2>
          </div>
          <div className='contact-content'>
            <ContactForm />
          </div >
        </div>
      </section>
    );
}

export default Contact;