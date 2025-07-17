import React from 'react';
import './style.css';

export default function Contact() {
  return (
    <main className="contact-page">
      {/* Hero Section with gradient */}
      <section className="contact-hero no-image">
        <div className="overlay" />
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>Let’s talk about your project or idea</p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-section">
        <form className="contact-form">
          <h2>Send us a message</h2>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Subject" required />
          <textarea rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </main>
  );
}
