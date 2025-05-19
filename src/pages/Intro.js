import React from 'react';
import { Link } from 'react-router-dom'; // Import Link z react-router-dom

function Intro() {
  return (
    <div>
      <section id="intro" className="intro">
        <h1><strong>Valentina Love</strong> Pilot</h1>
        <h2>Model, army officer, pilot - Adult film star</h2>
        <p>
          Hey, don't be a stranger! Curious to learn more about <strong>Valentina Love Pilot</strong>? 
          Feel free to explore and discover more about me!
        </p>
        <Link to="/gallery" className="btn">
          Go to Gallery
        </Link>
      </section>
    </div>
  );
}

export default Intro;