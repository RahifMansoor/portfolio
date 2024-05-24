import React from 'react';
import linkedinImage from '../assets/linkedin.png';

function LinkedIn() {
  return (
    <div 
      className="block" 
      style={{ 
        backgroundImage: `url(${linkedinImage})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        backgroundRepeat: 'no-repeat' 
      }}
    >
      <a href="https://www.linkedin.com/in/rahif-mansoor-8a3b9522b/" target="_blank" rel="noopener noreferrer" style={{ 
        display: 'block', 
        width: '100%', 
        height: '100%' 
      }}></a>
    </div>
  );
}

export default LinkedIn;
