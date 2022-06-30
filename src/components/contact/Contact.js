// Import the required things here:

import React from "react";
import './contact.css';


// This is to make this contact section:

const Contact = () => {
    return (
      <section id="contact">
        <h2 className="changeSize">Contact Me</h2>
        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <h4>Email</h4>
              <h5>hamzaishfaq980@gmail.com</h5>
              <a href="mailto:hamzaishfaq980@gmail.com">Send a message</a>
            </article>
          </div>
          <form>
            <input type="text" placeholder="Your Full Name" name="user_name" required />
            <input type="text" placeholder="Your Email" name="user_email" required/>
            <textarea placeholder="Your message" rows="7" name="message" required></textarea>
            <button type="submit" className="btn btn-primary" >Send Message</button>
          </form>
        </div>
  
      </section>
    )
  }
  
  export default Contact;