import { useState } from "react";
import { motion } from "framer-motion";

function HeroButton({ href, text, primary }) {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: primary
      ? isHovered
        ? "#005ce6"
        : "#0077ff"
      : "transparent",
    color: primary ? "white" : isHovered ? "#0077ff" : "#333",
    border: primary ? "none" : "2px solid #0077ff",
    padding: "12px 28px",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "600",
    transition: "all 0.3s ease-in-out",
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    boxShadow: primary
      ? isHovered
        ? "0 10px 25px rgba(0, 119, 255, 0.5)"
        : "0 6px 15px rgba(0, 0, 0, 0.1)"
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
    padding: "120px 20px",
    background:
      "linear-gradient(135deg, #f0f4ff, #e6e9f0, #ffffff)",
    textAlign: "center",
    flexWrap: "wrap",
    minHeight: "100vh",
  };

  const textContainer = {
    maxWidth: "800px",
    color: "#1e1e2f",
  };

  const headingStyle = {
    fontSize: "3.2rem",
    marginBottom: "15px",
    fontWeight: "700",
    lineHeight: "1.2",
  };

  const highlightName = {
    color: "#0077ff",
    fontWeight: "bold",
  };

  const badgeContainer = {
    display: "flex",
    gap: "12px",
    justifyContent: "center",
    flexWrap: "wrap",
    marginBottom: "25px",
  };

  const badgeStyle = {
    backgroundColor: "#e6f0ff",
    color: "#0077ff",
    padding: "6px 14px",
    borderRadius: "20px",
    fontSize: "0.9rem",
    fontWeight: "500",
  };

  const paragraphStyle = {
    fontSize: "1.1rem",
    lineHeight: "1.7",
    marginBottom: "15px",
    color: "#444",
  };

  const buttonContainer = {
    marginTop: "30px",
    display: "flex",
    gap: "20px",
    justifyContent: "center",
    flexWrap: "wrap",
  };

  return (
    <section id="hero" style={sectionStyle}>
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
          I specialize in building secure, scalable, and modern web
          applications with the MERN & MEAN stacks.
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
          <HeroButton href="/surendhar-Resume.pdf" text="📄 Download CV" primary />
          <HeroButton href="#contact" text="✉️ Contact Me" />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
