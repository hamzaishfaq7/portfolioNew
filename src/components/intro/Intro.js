// Import what is needed:

import React from 'react';

// This is to import the Badge and Folders Icons:
import { AiFillCode } from 'react-icons/ai';
import { AiOutlineGithub } from "react-icons/ai";


// This is to import my Picture:
import ME from '../../assets/me2.jpg';

import './intro.css';

// This is the creation of the Intro:
const Intro = () => {
    // Return Something:
    return (
        <section id="about">
      <h2 className='change'>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <AiFillCode className="about__icon" />
              <h5>Experience</h5>
              <small>1+ years</small>
            </article>
            <article className="about__card">
              
            <AiOutlineGithub className="about__icon" />
              <h5>Projects</h5>
              <small>3+ Completed Projects</small>
            </article>
          </div>
          <p>I'm a front end developer, who used to be a banker. Based in Toronto. I’ve spent the last several months in a remote environment, working with HTML, CSS, JavaScript, Git/GitHub and React. My experience as a banker helped me collaborate with people from all walks of life. Additionally, working with people's money isn’t an easy task, however, it has helped me become more efficient, productive, more empathetic with life's situations and fast even when in a very stressful environment, an important skill in any industry.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
    )
}

// Export for use:
export default Intro