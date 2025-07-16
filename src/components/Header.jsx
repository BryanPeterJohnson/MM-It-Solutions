import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <Link to="/" style={styles.logoWrapper}>
          <img src={logo} alt="MM IT Solutions Logo" style={styles.logoImg} />
          <span style={styles.logoText}>
            <span style={styles.logoAccent}>MM</span> IT Solutions
          </span>
        </Link>

        <nav style={styles.nav}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/about" style={styles.link}>About</Link>
          <Link to="/services" style={styles.link}>Services</Link>
          <Link to="/contact" style={styles.link}>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    width: '100%',
    height: '70px',
    background: 'transparent',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    maxWidth: '1200px',
    width: '100%',
    margin: '0 auto',
    padding: '0 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: "'Segoe UI', sans-serif",
  },
  logoWrapper: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
  },
  logoImg: {
    height: '40px', // Consistent height with nav
    marginRight: '10px',
    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))',
  },
  logoText: {
    fontSize: '18px',
    fontWeight: '600',
    color: '#ffffff',
    lineHeight: '1',
    display: 'flex',
    alignItems: 'center',
  },
  logoAccent: {
    color: '#00b4db',
    marginRight: '4px',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: '28px',
  },
  link: {
    textDecoration: 'none',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'color 0.3s ease',
  },
};

export default Header;
