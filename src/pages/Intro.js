import React from 'react';
import { Link } from 'react-router-dom'; // Import Link z react-router-dom

function Intro() {
  return (
    <div>
      <section id="intro" className="intro">
        <h1><strong>Grundak</strong></h1>
        <h2>Web Developer - Specialist in Presentation Websites</h2>
        <p>
          Welcome! Curious to learn more about <strong>Grundak</strong>? 
          Feel free to explore my services, references, and get in touch!
        </p>
        <Link to="/services" className="btn">
          Explore Services
        </Link>
      </section>
    </div>
  );
}

export default Intro;