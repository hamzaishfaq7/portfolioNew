// This is here to link a resume to:

import React from 'react';
import CV from '../../../src/assets/resume.pdf';

// This is the creation for the resume download component.
const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">Download Resume</a>
      <a href="#contact" className="btn btn-primary">Contact Me!</a>
    </div>
  )
}

// Export for use:

export default CTA