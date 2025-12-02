import React from 'react';
import './Skills.css';

export default function Skills() {
  const skills = ["Layout Design (Canva)","Communication Skills","Time Management","Capcut","Concept creation and idea building"];

  return (
    <section className="skills-section">
      <h2>Skills</h2>
      <ul className="skills-list">
        {skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
