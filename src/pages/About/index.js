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
              MM IT Solutions is a UK-based full-stack development and digital marketing agency. We specialize in crafting
              cutting-edge mobile apps, websites, and marketing campaigns tailored for startups, SMEs, and enterprises.
            </p>
            <p>
              Our talented team of developers, designers, and strategists collaborate to bring your ideas to life.
              Whether you're building a new product or upgrading an existing one, we provide seamless end-to-end support.
            </p>
            <p>
              From initial concept and UX/UI design to development, deployment, and ongoing marketing — our integrated
              approach ensures your digital success.
            </p>
            <p>
              With a passion for innovation, a commitment to quality, and an eye on emerging technologies, we help you
              stay competitive in an ever-evolving digital landscape.
            </p>
          </div>
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=800&q=80"
              alt="Team discussion"
            />
          </div>
        </div>
      </section>



               {/* Mission & Vision */}
 <section className="mission-vision">
  <div
    className="mission"
    style={{
      backgroundImage:
        "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq92CdFmwg7VCWpMno1ckxa2_jsqLvbWWVfQ&s')",
    }}
  >
    <h3>Our Mission</h3>
    <p>
      To empower businesses with world-class digital products that deliver measurable results and transform
      customer experiences.
    </p>
  </div>
  <div
    className="vision"
    style={{
      backgroundImage:
        "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMluiq6o7wjKd49vn2XxtQFFRtgB4Rq_EkXg&s')",
    }}
  >
    <h3>Our Vision</h3>
    <p>To become the most trusted technology partner for growing businesses in the UK and beyond.</p>
  </div>
</section>



  {/* Why Choose Us */}
<section className="why-us-premium">
  <div className="why-us-container">
    <h2 className="why-us-title">Why Choose <span>MM IT Solutions?</span></h2>
    <p className="why-us-subtitle">
      We blend technology, creativity, and business strategy to deliver impactful results.
    </p>

    <div className="why-us-grid">
      {[
        "End-to-end custom development",
        "UK-based support and project management",
        "Agile, scalable and budget-friendly approach",
        "Skilled team across web, mobile & marketing",
        "Transparent communication and regular reports",
        "Commitment to innovation and quality",
      ].map((item, idx) => (
        <div key={idx} className="why-us-card">
          <span className="check-icon">✔</span>
          <p>{item}</p>
        </div>
      ))}
    </div>

    <div className="why-us-banner">
      <img
        src="https://images.unsplash.com/photo-1580894908361-967195033215?auto=format&fit=crop&w=1200&q=80"
        alt="Team working together"
      />
    </div>
  </div>
</section>





      {/* Team */}
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
            {
              name: 'Fatima Shah',
              role: 'Marketing Manager',
              img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=800&q=80',
            },
          ].map((m, i) => (
            <div className="team-card" key={i}>
              <img src={m.img} alt={m.name} />
              <h4>{m.name}</h4>
              <p>{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <h2>Let's Build Something Great Together</h2>
        <p>Book your free consultation with our experts today.</p>
        <a href="/contact" className="cta-btn">
          Contact Us
        </a>
      </section>
    </main>
  );
}
