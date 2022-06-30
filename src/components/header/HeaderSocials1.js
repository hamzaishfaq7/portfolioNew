// Import whats needed:
import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

// This is for the socials component:

const HeaderSocials = () => {
    // Return something:
    return (
    <div className="header__socials">
    <a href="https://www.linkedin.com/in/meri-gogichashvili/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
    <a href="https://github.com/Meri-MG" target="_blank" rel="noreferrer" ><FaGithub /></a>
  </div>
  )
}

// Export for use:

export default HeaderSocials;