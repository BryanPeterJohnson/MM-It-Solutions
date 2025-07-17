import React from 'react';
import './style.css';

export default function Services() {
  const serviceList = [
    {
      title: 'Custom Web Development',
      desc: 'Tailored web solutions to power your business online.',
      icon: '🧩',
    },
    {
      title: 'Mobile App Development',
      desc: 'Robust, responsive mobile apps for Android & iOS.',
      icon: '📱',
    },
    {
      title: 'UI/UX Design',
      desc: 'Intuitive and elegant design for seamless user experience.',
      icon: '🎨',
    },
    {
      title: 'Cloud & DevOps',
      desc: 'Secure, scalable infrastructure for modern apps.',
      icon: '☁️',
    },
    {
      title: 'E-Commerce Solutions',
      desc: 'Build and grow your online store with our powerful tools.',
      icon: '🛒',
    },
    {
      title: 'IT Consulting & Support',
      desc: 'Strategic guidance with UK-based expert support.',
      icon: '💼',
    },
  ];

  return (
    <main className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Our Services</h1>
          <p>Delivering results through innovation and experience</p>
        </div>
      </section>

      {/* What We Offer */}
      <section className="offer-section">
        <h2>What We Offer</h2>
        <div className="services-grid">
          {serviceList.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us-mini">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>✔ UK-based expert team</li>
          <li>✔ Proven track record of delivery</li>
          <li>✔ Client-first approach with ongoing support</li>
        </ul>
      </section>

      {/* Contact CTA */}
      <section className="cta-section">
        <div className="cta-card">
          <h2>Ready to grow your business?</h2>
          <p>Let’s discuss your goals and build something great together.</p>
          <a href="/contact" className="cta-button">Get in Touch</a>
        </div>
      </section>
    </main>
  );
}
