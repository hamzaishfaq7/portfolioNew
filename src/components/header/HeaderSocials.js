// Import whats needed:
import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

// This is for the socials component:

const HeaderSocials = () => {
    // Return something:
    return (
    <div className="header__socials">
    <a href="https://www.linkedin.com/in/hamza-ishfaq-8b70a9143/" target="new" rel="noreferrer" ><BsLinkedin /></a>
    <a href="https://github.com/hamzaishfaq7" target="new" rel="noreferrer" ><FaGithub /></a>
  </div>
  )
}

// Export for use:

export default HeaderSocials;