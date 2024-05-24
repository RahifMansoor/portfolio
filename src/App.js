import React from 'react';
import Header from './components/Header';
import LinkedIn from './components/LinkedIn';
import GitHub from './components/GitHub';
import Introduction from './components/Introduction';
import Skills from './components/Skills';
import Photos from './components/Photos';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="social-links">
        <LinkedIn />
        <GitHub />
      </div>
      <Introduction />
      <Skills />
      <Photos />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
