import React, { useState } from "react";
import emailjs from 'emailjs-com';
import './ContactForm.css'; // Import your CSS file for styling

function ContactForm() {
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate that the name and email fields are not empty
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();

    if (!name || !email) {
      alert('Please fill out both Name and Email fields.');
      return; // Exit the function and do not send the email
    }

    emailjs
      .sendForm('service_6y3uyms', 'template_yh0rxsp', e.target, '0rUFhKtO8Hl5AczW-')
      .then(
        (result) => {
          console.log(result.text);
          setIsSuccess(true); // Set the success state to true
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const resetForm = () => {
    setIsSuccess(false); // Reset the success state to false
  };

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      {isSuccess ? (
        <div className="success-message">
          <p>Message sent successfully!</p>
          <button onClick={resetForm}>Send Another Message</button>
        </div>
      ) : (
        <>
          <div className="top-fields">
            <input type="text" className="credentials" placeholder="Name" name="name" />
            <input type="email" className="credentials" placeholder="Email" name="email" />
          </div>
          <textarea className="message" placeholder="Message" name="message" />
          <button type="submit">Send</button>
        </>
      )}
    </form>
  );
}

export default ContactForm;
