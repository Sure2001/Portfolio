import { useState } from "react";
import { motion } from "framer-motion";

function HeroButton({ href, text, primary }) {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: primary
      ? isHovered
        ? "#0047b3"
        : "#0066ff"
      : "transparent",
    color: primary ? "white" : isHovered ? "#0066ff" : "#222",
    border: primary ? "none" : "2px solid #0066ff",
    padding: "14px 32px",
    borderRadius: "50px",
    textDecoration: "none",
    fontWeight: "600",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "1rem",
    transition: "all 0.3s ease-in-out",
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    boxShadow: primary
      ? isHovered
        ? "0 12px 28px rgba(0, 102, 255, 0.4)"
        : "0 6px 15px rgba(0, 0, 0, 0.15)"
      : "none",
    cursor: "pointer",
    display: "inline-block",
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "60px",
    padding: "100px 20px",
    background: "linear-gradient(135deg, #eef2ff, #ffffff)",
    minHeight: "100vh",
    flexWrap: "wrap",
    fontFamily: "'Poppins', sans-serif",
  };

  const textContainer = {
    maxWidth: "600px",
    color: "#1e1e2f",
    textAlign: "left",
  };

  const headingStyle = {
    fontSize: "3.5rem",
    marginBottom: "15px",
    fontWeight: "700",
    lineHeight: "1.2",
    fontFamily: "'Raleway', sans-serif",
  };

  const highlightName = {
    background: "linear-gradient(90deg, #0077ff, #00d4ff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "800",
  };

  const badgeContainer = {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    marginBottom: "25px",
  };

  const badgeStyle = {
    backgroundColor: "#e6f0ff",
    color: "#0077ff",
    padding: "6px 16px",
    borderRadius: "20px",
    fontSize: "0.9rem",
    fontWeight: "600",
    letterSpacing: "0.5px",
  };

  const paragraphStyle = {
    fontSize: "1.1rem",
    lineHeight: "1.8",
    marginBottom: "15px",
    color: "#444",
  };

  const buttonContainer = {
    marginTop: "30px",
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  };

  const profileContainer = {
    flexShrink: 0,
    textAlign: "center",
  };

  // ✅ Image + Corner Borders
  const profileWrapper = {
    position: "relative",
    display: "inline-block",
  };

  const profileImg = {
    width: "260px",
    height: "300px",
    borderRadius: "20px",
    objectFit: "cover",
    boxShadow: "0 12px 28px rgba(0, 0, 0, 0.2)",
    position: "relative",
    zIndex: 2,
  };

  const cornerBorderTopRight = {
    position: "absolute",
    top: "-12px",
    right: "-12px",
    width: "60px",
    height: "60px",
    borderTop: "4px solid #0077ff",
    borderRight: "4px solid #0077ff",
    borderTopRightRadius: "20px",
    zIndex: 1,
  };

  const cornerBorderBottomLeft = {
    position: "absolute",
    bottom: "-12px",
    left: "-12px",
    width: "60px",
    height: "60px",
    borderBottom: "4px solid #0077ff",
    borderLeft: "4px solid #0077ff",
    borderBottomLeftRadius: "20px",
    zIndex: 1,
  };

  return (
    <section id="hero" style={sectionStyle}>
      {/* Profile Image with Only 2-Side Borders */}
      <motion.div
        style={profileContainer}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div style={profileWrapper}>
          <div style={cornerBorderTopRight}></div>
          <div style={cornerBorderBottomLeft}></div>
          <img src="/surendhar.jpg" alt="Surendhar" style={profileImg} />
        </div>
      </motion.div>

      {/* Text Section */}
      <motion.div
        style={textContainer}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 style={headingStyle}>
          Hi, I’m <span style={highlightName}>SURENDHAR K</span>
        </h1>

        {/* Role Badges */}
        <div style={badgeContainer}>
          <span style={badgeStyle}>Full-Stack Developer</span>
          <span style={badgeStyle}>MERN Stack</span>
          <span style={badgeStyle}>MEAN Stack</span>
        </div>

        {/* About */}
        <p style={paragraphStyle}>
          I specialize in building secure, scalable, and modern web applications
          with the MERN & MEAN stacks.
        </p>
        <p style={paragraphStyle}>
          Passionate about solving real-world problems with clean code and
          creative solutions.
        </p>
        <p style={paragraphStyle}>
          Always learning, always innovating — let’s build something great
          together 🚀
        </p>

        {/* Buttons */}
        <div style={buttonContainer}>
          <HeroButton
            href="/surendhar-Resume.pdf"
            text="📄 Download CV"
            primary
          />
          <HeroButton href="#contact" text="✉️ Contact Me" />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
