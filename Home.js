import React from 'react';
import './Home.css';

export default function Home() {
  return (
    <section className="home-section">
      <div className="home-content">
        <h1>Hello! I'm <span>JESSA B. LOZANO</span></h1>
        <p>
          I’m someone who loves watching movies and K-dramas, and discovering new places or trying out new things I’ve recently found. 
          Exploring new experiences excites me and inspires my creativity, whether it’s learning something new, appreciating a story, or enjoying little adventures in daily life.

        </p>
        <a href="#contact" className="contact-btn">Contact Me</a>
      </div>
      <div className="home-image">
        <img src="/myphoto.jpg" alt="Jessa Lozano" />
      </div>
    </section>
  );
}
