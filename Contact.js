import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact-section">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={e => e.preventDefault()}>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" rows={5} required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}
