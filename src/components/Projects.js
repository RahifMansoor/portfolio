import React from 'react';
import './Projects.css'; // Create a new CSS file for the Projects component
import projectLogo1 from '../assets/project1_logo.png'; // Make sure to add the project logos in this path
import projectLogo2 from '../assets/project2_logo.jpg';
import projectLogo3 from '../assets/project3_logo.jpg';

function Projects() {
  return (
    <section className="block projects-block">
      <h2>Projects</h2>
      <a href="https://project1.example.com" target="_blank" rel="noopener noreferrer" className="project-entry">
        <img src={projectLogo1} alt="Project 1 Logo" className="project-logo" />
        <div>
          <h3>Pokemon Crystal Experiments</h3>
          <p>Using Reinforcement Learning to play and eventually beat Pokemon Crystal</p>
        </div>
      </a>
      <a href="https://project2.example.com" target="_blank" rel="noopener noreferrer" className="project-entry">
        <img src={projectLogo2} alt="Project 2 Logo" className="project-logo" />
        <div>
          <h3>Pass Rush Efficiency Pressure</h3>
          <p>Developing a metric that measures the amount of pressure generated by a defensive lineman</p>
        </div>
      </a>
      <a href="https://project3.example.com" target="_blank" rel="noopener noreferrer" className="project-entry">
        <img src={projectLogo3} alt="Project 3 Logo" className="project-logo" />
        <div>
          <h3>Network Analyzer</h3>
          <p>Tool to analyze home Wi-Fi networks for potential security threats</p>
        </div>
      </a>
    </section>
  );
}

export default Projects;
