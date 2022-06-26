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
          <h5 className="text-light">A Front-end Developer</h5>
        </div>
      </header>
    )
  }
  
  // Export for use:

  export default Header