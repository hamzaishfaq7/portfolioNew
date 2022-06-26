// Import what is needed:
import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

// This is the main header:

const Header = () => {
    return (
      <header id="home">
        <div className="container header__container">
          <h5>Hi there! My name is </h5>
          <h1>Hamza Ishfaq</h1>
          <h5 className="text-light">Front-end Developer</h5>
          <CTA />
          <a href="#contact" className="scroll__down">Scroll Down For More</a>
          <HeaderSocials />
        </div>
      </header>
    )
  }
  
  // Export for use:

  export default Header