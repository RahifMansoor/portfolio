import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <a href="#about ">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
        <a href="#leadership">Leadership</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </header>

      <section id="about">
        <h1>About Me</h1>
        <p>I'm Rahif Mansoor, a dedicated and passionate Computer Science student at Texas A&M University with a strong focus on data science and software engineering. I'm a sports enthusiast and a lifelong learner, always seeking new challenges and opportunities to grow.</p>
        <div className="resume-button-container">
          <a href="Mansoor_Rahif+Resume+(2).pdf" target="_blank" class="button">Resume</a>
        </div>
      </section>

      <section id="experience">
        <h1>Experience</h1>
        <p>[Your Experience Details]</p>
      </section>

      <section id="projects">
        <h1>Projects</h1>
        <p>[Your Projects Details]</p>
      </section>

      <section id="education">
        <h1>Education</h1>
        <p>[Your Education Details]</p>
      </section>

      <section id="leadership">
        <h1>Leadership</h1>
        <p>[Your Leadership Details]</p>
      </section>

      <section id="skills">
        <h1>Skills</h1>
        <p>[Your Skills Details]</p>
      </section>

      <section id="contact">
        <h1>Contact</h1>
        <p>[Your Contact Details]</p>
        {/* Contact form or information */}
      </section>
    </div>
  );
}

document.addEventListener("DOMContentLoaded", function() {
  const profilePic = document.querySelector('.profile-pic');
  if (profilePic) {
    profilePic.classList.add('fade-in');
  }
});
export default App;
