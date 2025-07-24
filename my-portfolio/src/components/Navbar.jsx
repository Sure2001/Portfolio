import React, { useState, useEffect } from 'react';
import { FaAlignRight, FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = {
    navbar: {
      width: '98%',
      height: '70px',
      backgroundColor: '#1e1e2f',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 1000,
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
    },
    leftSection: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    logoImg: {
      width: '45px',
      height: '45px',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '2px solid white',
    },
    nameText: {
      fontWeight: 'bold',
      fontSize: '1.2rem',
    },
    toggleBtn: {
      background: 'transparent',
      border: 'none',
      color: 'white',
      fontSize: '1.5rem',
      display: isMobile ? 'block' : 'none',
      cursor: 'pointer',
      padding: '30px',
      outline: 'none',
    },
    navMenu: {
      display: isMobile ? (isOpen ? 'flex' : 'none') : 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      gap: '20px',
      position: isMobile ? 'absolute' : 'static',
      top: isMobile ? '70px' : undefined,
      left: 0,
      width: isMobile ? '100%' : 'auto',
      backgroundColor: isMobile ? '#1e1e2f' : 'transparent',
      padding: isMobile ? '20px 0' : '0',
      alignItems: 'center',
      textAlign: 'center',
    },
    navLink: {
      color: '#ccc',
      textDecoration: 'none',
      fontSize: '1rem',
    },
    socialLinks: {
      display: 'flex',
      gap: '15px',
      flexDirection: isMobile ? 'column' : 'row',
      marginTop: isMobile ? '10px' : 0,
    },
    socialLink: {
      color: '#aaa',
      textDecoration: 'none',
      fontSize: '0.95rem',
    },
  };

  return (
    <header style={styles.navbar}>
      <div style={styles.leftSection}>
        <img src="/surendhar.jpg" alt="Surendhar" style={styles.logoImg} />
        <span style={styles.nameText}>SURENDHAR</span>
      </div>

      <button style={styles.toggleBtn} onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <nav style={styles.navMenu}>
        <a href="#hero" style={styles.navLink} onClick={closeMenu}>Home</a>
        <a href="#about" style={styles.navLink} onClick={closeMenu}>About</a>
        <a href="#skills" style={styles.navLink} onClick={closeMenu}>Skills</a>
        <a href="#projects" style={styles.navLink} onClick={closeMenu}>Projects</a>
        <a href="#contact" style={styles.navLink} onClick={closeMenu}>Contact</a>
        <div style={styles.socialLinks}>
          <a href="https://github.com/Sure2001" target="_blank" rel="noreferrer" style={styles.socialLink}>GitHub</a>
          <a href="https://www.linkedin.com/in/surendhar-k-772503365" target="_blank" rel="noreferrer" style={styles.socialLink}>LinkedIn</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
