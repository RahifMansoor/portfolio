import React from 'react';
import githubImage from '../assets/github.png';

function GitHub() {
  return (
    <div 
      className="block" 
      style={{ 
        backgroundImage: `url(${githubImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat' 
      }}
    >
      <a href="https://github.com/RahifMansoor" target="_blank" rel="noopener noreferrer" style={{ 
        display: 'block', 
        width: '100%', 
        height: '100%' 
      }}></a>
    </div>
  );
}

export default GitHub;
