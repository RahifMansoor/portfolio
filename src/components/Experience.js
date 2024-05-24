import React from 'react';
import './Experience.css'; // Create a new CSS file for the Experience component
import attLogo from '../assets/att_logo.png'; // Make sure to add the AT&T logo in this path
import hpeLogo from '../assets/hpe_logo.jpg'; // Make sure to add the HPE logo in this path

function Experience() {
  return (
    <section className="block experience-block">
      <h2>Work Experience</h2>
      <div className="experience-entry">
        <img src={attLogo} alt="AT&T Logo" className="experience-logo" />
        <div>
          <h3>Software Engineering Intern</h3>
          <p>AT&T</p>
        </div>
      </div>
      <div className="experience-entry">
        <img src={hpeLogo} alt="HPE Logo" className="experience-logo" />
        <div>
          <h3>Data Science Intern</h3>
          <p>Hewlett Packard Enterprise</p>
        </div>
      </div>
    </section>
  );
}

export default Experience;
