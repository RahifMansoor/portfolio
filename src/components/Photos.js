import React from 'react';
import './Photos.css';
import photo1 from '../assets/rahif.jpg';
import photo2 from '../assets/bunny.PNG';
import photo3 from '../assets/sunset.png';

function Photos() {
  return (
    <section className="block photos-block">
      <h2>Photos</h2>
      <div className="photos-container">
        <img src={photo1} alt="Photo 1" className="photo" />
        <img src={photo2} alt="Photo 2" className="photo" />
        <img src={photo3} alt="Photo 3" className="photo" />
      </div>
    </section>
  );
}

export default Photos;
