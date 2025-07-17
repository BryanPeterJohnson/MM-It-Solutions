import React from 'react';
import './style.css';

const projects = [
  {
    title: 'Perivale Motor Services',
    desc: 'A professional automotive service website with booking functionality, built using React and responsive design best practices.',
    image: 'https://perivalemotorservices.com/assets/images/hero.jpg', // Replace with a working image or screenshot
    link: 'https://perivalemotorservices.com/',
  },
  {
    title: 'AutoFix CRM',
    desc: 'Custom-built CRM system for garage management using Laravel and React.',
    image: 'https://cdn.pixabay.com/photo/2023/07/12/garage.jpg', // Sample image
    link: '#',
  },
  {
    title: 'MM Taxi App',
    desc: 'End-to-end taxi booking platform built with React Native and Firebase.',
    image: 'https://cdn.pixabay.com/photo/2019/09/15/urban-4471183_960_720.jpg', // Sample image
    link: '#',
  },
  {
    title: 'EcomX Store',
    desc: 'Full-stack ecommerce solution for UK D2C brand using Next.js and Stripe.',
    image: 'https://cdn.pixabay.com/photo/2017/10/08/19/18/online-shopping-2835807_1280.jpg',
    link: '#',
  },
  {
    title: 'MM Digital Agency',
    desc: 'Marketing website with SEO dashboard built with React and Node.js.',
    image: 'https://cdn.pixabay.com/photo/2018/04/15/11/36/marketing-3329581_1280.jpg',
    link: '#',
  },
];

export default function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio-header">
        <h2>Our Work</h2>
        <p>Here are some of the digital projects we've proudly delivered.</p>
      </div>

      <div className="portfolio-grid">
        {projects.map((p, i) => (
          <a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-card"
          >
            <img src={p.image} alt={p.title} className="portfolio-img" />
            <div className="portfolio-details">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
