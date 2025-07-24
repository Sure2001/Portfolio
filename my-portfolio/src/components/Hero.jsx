import { useState } from 'react';
import { motion } from 'framer-motion';

function HeroButton({ href, text }) {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: isHovered ? '#005ce6' : '#0077ff',
    color: 'white',
    padding: '12px 24px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'all 0.3s ease-in-out',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    boxShadow: isHovered
      ? '0 8px 20px rgba(0, 119, 255, 0.4)'
      : '0 4px 10px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    display: 'inline-block',
  };

  return (
    <a
      href={href}
      style={buttonStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </a>
  );
}

function Hero() {
  const sectionStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '100px 20px',
     background: 'linear-gradient(135deg, #f8f9fa, #e0eafc)',
    textAlign: 'center',
    flexWrap: 'wrap',
  };

  const textContainer = {
    maxWidth: '700px',
    color: '#1e1e2f',
  };

  const headingStyle = {
    fontSize: '2.8rem',
    marginBottom: '10px',
  };

  const subheadingStyle = {
    fontSize: '1.5rem',
    color: '#555',
    marginBottom: '20px',
  };

  const paragraphStyle = {
    fontSize: '1rem',
    lineHeight: '1.7',
    marginBottom: '15px',
    color: '#444',
  };

  const buttonContainer = {
    marginTop: '25px',
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  };

  return (
    <section id="hero" style={sectionStyle}>
      <motion.div
        style={textContainer}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 style={headingStyle}>
          Hi, I’m <span style={{ color: '#ff0000ff' }}>SURENDHAR K</span>
        </h1>
        <h3 style={subheadingStyle}>
          Full-Stack Developer | MERN & MEAN Stack Expert
        </h3>
        <p style={paragraphStyle}>
          I build modern, secure, and scalable web applications using the MERN and MEAN stacks.
        </p>
        <p style={paragraphStyle}>
          I enjoy solving problems with code and crafting seamless digital experiences.
        </p>
        <p style={paragraphStyle}>
          Always learning, always building — let’s create something great together.
        </p>
        <div style={buttonContainer}>
          <HeroButton href="/SURENDHAR-REACT.pdf" text="📄 Download CV" />
         
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
