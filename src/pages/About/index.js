import React from 'react';
import './style.css';

export default function About() {
  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="overlay" />
        <div className="hero-content">
          <h1>About MM IT Solutions</h1>
          <p>Your Digital Growth Partner</p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="about-section with-image">
        <div className="about-container">
          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              MM IT Solutions is a UK-based full-stack development and digital marketing agency.
              We specialise in crafting cutting-edge mobile apps, websites, and marketing campaigns
              tailored for startups, SMEs, and enterprise businesses.
            </p>
            <p>
              Our team of developers, designers, and strategists collaborate to turn your vision
              into high-performing digital products. From concept to launch — we’re with you every step of the way.
            </p>
            <p>
              With deep industry experience and a passion for innovation, we continuously strive to deliver
              beyond expectations while staying aligned with your business objectives.
            </p>
          </div>
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=800&q=80"
              alt="Team discussion in office"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us-section">
        <h2>Why Choose MM IT Solutions?</h2>
        <ul>
          <li>✅ End-to-end custom development</li>
          <li>✅ UK-based support and project management</li>
          <li>✅ Agile, scalable and budget-friendly approach</li>
          <li>✅ Skilled team across web, mobile & marketing</li>
          <li>✅ Transparent communication and regular reports</li>
        </ul>
        <div className="why-us-image">
          <img
            src="https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=1000&q=80"
            alt="Client collaboration meeting"
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="mission">
          <h3>Our Mission</h3>
          <p>
            To empower businesses with world-class digital products that deliver measurable results
            and transform customer experiences.
          </p>
          <img
            src="https://images.unsplash.com/photo-1599474401082-cb1b6f67f697?auto=format&fit=crop&w=800&q=80"
            alt="Team high five mission"
          />
        </div>
        <div className="vision">
          <h3>Our Vision</h3>
          <p>
            To become the most trusted technology partner for growing businesses in the UK and beyond.
          </p>
          <img
            src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a6?auto=format&fit=crop&w=800&q=80"
            alt="Vision and planning illustration"
          />
        </div>
      </section>

      {/* Our Team */}
      <section className="team-section">
        <h2>Meet Our Core Team</h2>
        <div className="team-grid">
          {[
            {
              name: 'Bryan Peter',
              role: 'CEO & Tech Strategist',
              img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80',
            },
            {
              name: 'Sophia Malik',
              role: 'Lead UI/UX Designer',
              img: 'https://images.unsplash.com/photo-1590080877109-3333d004b4d4?auto=format&fit=crop&w=800&q=80',
            },
            {
              name: 'David Ahmed',
              role: 'Senior Developer',
              img: 'https://images.unsplash.com/photo-1620600053793-1ec3d5c09f27?auto=format&fit=crop&w=800&q=80',
            },
          ].map((member, index) => (
            <div className="team-card" key={index}>
              <img src={member.img} alt={member.name} />
              <h4>{member.name}</h4>
              <p>{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <h2>Let's Build Something Great Together</h2>
        <p>Book your free consultation with our experts today.</p>
        <a href="/contact" className="cta-btn">Contact Us</a>
      </section>
    </main>
  );
}
