import React, { useState, useEffect, useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';
import './style.css';

export default function Home() {
  const [startTyping, setStartTyping] = useState(false);
  const cardRefs = useRef([]);

  useEffect(() => {
    setStartTyping(true);

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const services = [
    {
      title: 'App Development',
      icon: 'https://cdn-icons-png.flaticon.com/512/2721/2721613.png',
      desc: 'Cross-platform mobile apps using Flutter & React Native — tailored for startups, SMEs, and enterprises.',
      note: 'Ideal For: Delivery apps, booking apps, financial apps, e-learning, and loyalty platforms.',
    },
    {
      title: 'Web Development',
      icon: 'https://cdn-icons-png.flaticon.com/512/2721/2721278.png',
      desc: 'Scalable, SEO-friendly websites using React, Next.js, and Laravel.',
      note: 'Includes: Custom CMS, API integrations, admin panels, blog systems, and more.',
    },
    {
      title: 'Digital Marketing',
      icon: 'https://cdn-icons-png.flaticon.com/512/2721/2721265.png',
      desc: '360° campaigns using SEO, PPC, Meta Ads, and Google Analytics.',
      note: 'We offer: Monthly reports, performance tracking, and ongoing optimisation.',
    },
    {
      title: 'UI/UX Design',
      icon: 'https://cdn-icons-png.flaticon.com/512/3208/3208710.png',
      desc: 'User-focused designs using Figma and Adobe XD.',
      note: 'Deliverables: Design systems, wireframes, brand guidelines, dark/light themes.',
    },
    {
      title: 'E-commerce Solutions',
      icon: 'https://cdn-icons-png.flaticon.com/512/1048/1048947.png',
      desc: 'Full-stack ecommerce development using Shopify, WooCommerce, or Laravel.',
      note: 'Best For: Fashion, food delivery, wholesale platforms, and D2C brands.',
    },
    {
      title: 'Custom Software',
      icon: 'https://cdn-icons-png.flaticon.com/512/1907/1907555.png',
      desc: 'Build tailored digital solutions such as CRMs, HR tools, dashboards.',
      note: 'Tech Stack: Node.js, Laravel, MongoDB, MySQL, Firebase, and AWS.',
    },
  ];

  const technologies = [
    { name: 'React.js', icon: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png', category: 'Frontend' },
    { name: 'Next.js', icon: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png', category: 'Frontend' },
    { name: 'Vue.js', icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111496.png', category: 'Frontend' },
    { name: 'Node.js', icon: 'https://cdn-icons-png.flaticon.com/512/919/919825.png', category: 'Backend' },
    { name: 'Laravel', icon: 'https://cdn-icons-png.flaticon.com/512/919/919831.png', category: 'Backend' },
    { name: 'Firebase', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968958.png', category: 'Backend' },
    { name: 'MongoDB', icon: 'https://cdn-icons-png.flaticon.com/512/919/919836.png', category: 'Database' },
    { name: 'MySQL', icon: 'https://cdn-icons-png.flaticon.com/512/919/919836.png', category: 'Database' },
    { name: 'AWS', icon: 'https://cdn-icons-png.flaticon.com/512/873/873120.png', category: 'Cloud' },
    { name: 'Docker', icon: 'https://cdn-icons-png.flaticon.com/512/919/919853.png', category: 'DevOps' },
    { name: 'Flutter', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png', category: 'Mobile' },
    { name: 'React Native', icon: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png', category: 'Mobile' },
    { name: 'Figma', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png', category: 'Design' },
    { name: 'Adobe XD', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968520.png', category: 'Design' },
    { name: 'GitHub', icon: 'https://cdn-icons-png.flaticon.com/512/733/733553.png', category: 'DevOps' },
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="overlay" />
        <div className="hero-content">
          <h1 className="headline smooth-fade">
            {startTyping && (
              <Typewriter
                words={['Crafting Digital Excellence']}
                typeSpeed={50}
                deleteSpeed={0}
                delaySpeed={400}
                cursor={false}
              />
            )}
          </h1>
          <p className="subheadline animate-fade delay-2">
            Bespoke Websites, Mobile Apps & Marketing that empower modern businesses.
          </p>
          <button className="cta-btn animate-fade delay-3">Start Your Project</button>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-grid">
          {services.map((service, index) => (
            <div
              key={index}
              ref={el => (cardRefs.current[index] = el)}
              className="service-card fade-in-up"
            >
              <img src={service.icon} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <p style={{ marginTop: '10px' }}>
                <em>{service.note}</em>
              </p>
            </div>
          ))}
        </div>
      </section>



      
 {/* Core Technologies */}
<section className="core-tech">
  <h2>Our Core Technologies</h2>
  <div className="tech-grid">
    {[
      // Original + 5 new technologies
      { name: 'React.js', icon: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png', category: 'Frontend' },
      { name: 'Next.js', icon: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png', category: 'Frontend' },
      { name: 'Vue.js', icon: 'https://cdn-icons-png.flaticon.com/512/2111/2111496.png', category: 'Frontend' },
      { name: 'Node.js', icon: 'https://cdn-icons-png.flaticon.com/512/919/919825.png', category: 'Backend' },
      { name: 'Laravel', icon: 'https://cdn-icons-png.flaticon.com/512/919/919831.png', category: 'Backend' },
      { name: 'Firebase', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968958.png', category: 'Backend' },
      { name: 'MongoDB', icon: 'https://cdn-icons-png.flaticon.com/512/919/919836.png', category: 'Database' },
      { name: 'MySQL', icon: 'https://cdn-icons-png.flaticon.com/512/919/919836.png', category: 'Database' },
      { name: 'AWS', icon: 'https://cdn-icons-png.flaticon.com/512/873/873120.png', category: 'Cloud' },
      { name: 'Docker', icon: 'https://cdn-icons-png.flaticon.com/512/919/919853.png', category: 'DevOps' },
      { name: 'Flutter', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png', category: 'Mobile' },
      { name: 'React Native', icon: 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png', category: 'Mobile' },
      { name: 'Figma', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png', category: 'Design' },
      { name: 'Adobe XD', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968520.png', category: 'Design' },
      { name: 'GitHub', icon: 'https://cdn-icons-png.flaticon.com/512/733/733553.png', category: 'DevOps' },
      // ✅ Newly Added
      { name: 'TypeScript', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968381.png', category: 'Frontend' },
      { name: 'Bootstrap', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968672.png', category: 'Frontend' },
      { name: 'Tailwind CSS', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968705.png', category: 'Frontend' },
      { name: 'PostgreSQL', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968342.png', category: 'Database' },
      { name: 'Nginx', icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968772.png', category: 'DevOps' },
    ].map((tech, index) => (
      <div
        key={index}
        className="tech-card fade-in-up"
        ref={el => (cardRefs.current[100 + index] = el)}
        title={tech.category}
      >
        <img src={tech.icon} alt={tech.name} />
        <span>{tech.name}</span>
        <small className="tech-category">{tech.category}</small>
      </div>
    ))}
  </div>
</section>



   {/* About Section */}
{/* About Section */}
<section className="about-section with-image">
  <div className="about-container">
    <div className="about-text">
      <h2>Who We Are</h2>
      <p>
        MM IT Solutions is a full-stack software and marketing company committed to delivering cutting-edge
        solutions that drive business success. Our passionate team turns ideas into scalable applications
        with measurable impact.
      </p>
      <p>
        We specialise in building high-performance mobile and web apps, cloud-native solutions, and data-driven
        digital marketing strategies. Whether you're a startup or an enterprise, our mission is to help you scale,
        innovate, and stay ahead in an ever-evolving digital world. From UI/UX design to backend infrastructure, 
        our holistic approach ensures every aspect of your digital journey is handled with precision and purpose.
      </p>
    </div>
    <div className="about-image">
      <img
        src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?auto=format&fit=crop&w=800&q=80"
        alt="MM IT Team Collaboration"
      />
    </div>
  </div>
</section>



  {/* Why Choose Us */}
<section className="why-us-section">
  <div className="why-us-container">
    <h2>Why Choose MM IT Solutions</h2>
    <p className="why-intro">
      At MM IT Solutions, we don’t just build software — we build digital success stories. Here's why clients trust us:
    </p>
    <div className="why-grid">
      <div className="why-item">
        <h4>✅ End-to-End Expertise</h4>
        <p>From strategy and design to development and deployment — we handle every step with care and precision.</p>
      </div>
      <div className="why-item">
        <h4>✅ Agile & Scalable Approach</h4>
        <p>Our agile processes allow us to adapt quickly to changes and scale solutions as your business grows.</p>
      </div>
      <div className="why-item">
        <h4>✅ Transparent Communication</h4>
        <p>We believe in clear, honest updates with real-time progress tracking and regular reporting.</p>
      </div>
      <div className="why-item">
        <h4>✅ Top Talent & Tools</h4>
        <p>Our team comprises industry-certified developers, designers, and marketers using the latest technologies.</p>
      </div>
      <div className="why-item">
        <h4>✅ UK-Based, Globally Connected</h4>
        <p>Headquartered in the UK, we serve businesses worldwide with local insight and global standards.</p>
      </div>
      <div className="why-item">
        <h4>✅ Focused on Results</h4>
        <p>Your success is our priority — we deliver measurable outcomes, not just promises.</p>
      </div>
    </div>
  </div>
</section>


      {/* CTA Banner */}
      <section className="cta-banner">
        <h2>Ready to Start Your Digital Journey?</h2>
        <p>Book a free consultation with MM IT Solutions and take the first step toward building your next big idea.</p>
        <button className="cta-btn">Contact Us</button>
      </section>

     
    </div>
  );
}
