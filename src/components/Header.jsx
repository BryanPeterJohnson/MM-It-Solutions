import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  const location = useLocation();

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
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              style={{
                ...styles.link,
                borderBottom: location.pathname === path ? '2px solid #00b4db' : 'none',
              }}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/contact', label: 'Contact' },
];

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    width: '100%',
    height: '70px',
    background: 'rgba(0,0,0,0.75)', // Semi-transparent dark for visibility
    backdropFilter: 'blur(6px)',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'background 0.3s ease',
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
    height: '42px',
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
    gap: '24px',
  },
  link: {
    textDecoration: 'none',
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: '500',
    paddingBottom: '4px',
    transition: 'color 0.3s ease, border-bottom 0.3s ease',
  },
};

export default Header;
