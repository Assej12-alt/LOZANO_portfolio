import React from 'react';
import './Projects.css';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Laundry Management System",
      description: "Monitors and tracks essential laundry supplies such as detergent, fabric conditioner, bleach, and other consumables."
    },
    {
      id: 2,
      title: "Remote Business Management System",
      description: "Provides a remote inventory monitoring feature to manage business operations efficiently."
    },
    {
      id: 3,
      title: "Supply History & Reports App",
      description: "Records all supply-related activities—including usage, refills, and updates—and generates accurate daily, weekly, and monthly reports."
    }
  ];

  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map(p => (
          <div key={p.id} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
