// Import the needed stuff:
import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import './footer.css';

// This is the footer creation:

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Hamza Ishfaq</a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/hamza-ishfaq-8b70a9143/" target="new" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/hamzaishfaq7" target="new" rel="noreferrer" ><FaGithub /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Hamza Ishfaq 2022. Created using React.</small>
      </div>
    </footer>
  )
}

// Export for use:

export default Footer