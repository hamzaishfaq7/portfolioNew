// This is here to link a resume to:
// Import what is required:

import React from 'react';
import CV from '../../../src/assets/resume.pdf';

// This is the creation for the download/contact component.
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