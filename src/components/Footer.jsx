import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left - Company Info */}
        <div className="footer-col company-info">
          <h3>MM IT Solutions</h3>
          <p>Empowering businesses with next-gen websites, mobile apps & marketing strategies.</p>
        </div>

        {/* Center - Quick Links */}
        <div className="footer-col links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/why-choose-us">Why Choose Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Right - Contact & Social */}
        <div className="footer-col contact">
          <h4>Contact Us</h4>
          <p>Email: info@mmit.uk</p>
          <p>Phone: +44 1234 567890</p>
          <div className="social-icons">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} MM IT Solutions. All rights reserved.</p>
      </div>

      {/* Embedded Styles */}
      <style>{`
        .footer {
          background: #0f0f0f;
          color: #eee;
          font-family: 'Segoe UI', sans-serif;
          padding: 60px 20px 30px;
        }

        .footer-container {
          display: flex;
          flex-wrap: wrap;
          max-width: 1200px;
          margin: 0 auto;
          gap: 40px;
          justify-content: space-between;
        }

        .footer-col {
          flex: 1 1 260px;
          min-width: 240px;
        }

        .footer-col h3,
        .footer-col h4 {
          margin-bottom: 12px;
          color: #00b4db;
        }

        .footer-col p,
        .footer-col a {
          font-size: 14px;
          line-height: 1.6;
          color: #ccc;
          text-decoration: none;
        }

        .footer-col a:hover {
          color: #00b4db;
        }

        .links ul {
          list-style: none;
          padding: 0;
        }

        .links li {
          margin-bottom: 8px;
        }

        .social-icons {
          margin-top: 10px;
        }

        .social-icons a {
          display: inline-block;
          margin-right: 10px;
          font-size: 16px;
          color: #ccc;
          transition: color 0.3s ease;
        }

        .social-icons a:hover {
          color: #00b4db;
        }

        .footer-bottom {
          text-align: center;
          margin-top: 30px;
          font-size: 13px;
          color: #999;
          border-top: 1px solid #222;
          padding-top: 20px;
        }

        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      {/* Add Font Awesome CDN if not globally included */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
      />
    </footer>
  );
}
