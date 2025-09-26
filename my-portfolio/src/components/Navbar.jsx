import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    navbar: {
      width: "97%",
      height: "70px",
      background: "linear-gradient(90deg, #141E30, #243B55)",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 30px",
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 1000,
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5)",
    },
    toggleBtn: {
      background: "transparent",
      border: "none",
      color: "white",
      fontSize: "1.8rem",
      display: isMobile ? "block" : "none",
      cursor: "pointer",
      outline: "none",
      zIndex: 1100,
    },
    navMenu: {
      display: isMobile ? (isOpen ? "flex" : "none") : "flex",
      flexDirection: isMobile ? "column" : "row",
      justifyContent: isMobile ? "center" : "center",
      alignItems: "center",
      gap: "25px",
      position: isMobile ? "absolute" : "static",
      top: isMobile ? "70px" : undefined,
      left: 0,
      width: isMobile ? "100%" : "auto",
      background: isMobile
        ? "linear-gradient(180deg, #141E30, #243B55)"
        : "transparent",
      padding: isMobile ? "25px 0" : "0",
      textAlign: "center",
      transition: "all 0.4s ease-in-out",
      flexGrow: 1, // makes links center
    },
    navLink: {
      color: "#ddd",
      textDecoration: "none",
      fontSize: "1rem",
      fontWeight: "500",
      transition: "color 0.3s ease",
    },
    socialLinks: {
      display: "flex",
      gap: "18px",
      alignItems: "center",
    },
    socialLink: {
      color: "#bbb",
      fontSize: "1.5rem",
      transition: "color 0.3s ease",
    },
  };

  return (
    <header style={styles.navbar}>
      {/* Toggle button for mobile */}
      <button style={styles.toggleBtn} onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Center nav links */}
      <nav style={styles.navMenu}>
        {["Home", "About", "Skills", "Projects", "Contact"].map((item, i) => (
          <a
            key={i}
            href={`#${item.toLowerCase()}`}
            style={styles.navLink}
            onClick={closeMenu}
            onMouseOver={(e) => (e.target.style.color = "#ff9800")}
            onMouseOut={(e) => (e.target.style.color = "#ddd")}
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Right social icons */}
      <div style={styles.socialLinks}>
        <a
          href="https://github.com/Sure2001"
          target="_blank"
          rel="noreferrer"
          style={styles.socialLink}
          onMouseOver={(e) => (e.target.style.color = "#fff")}
          onMouseOut={(e) => (e.target.style.color = "#bbb")}
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/surendhar-k-772503365"
          target="_blank"
          rel="noreferrer"
          style={styles.socialLink}
          onMouseOver={(e) => (e.target.style.color = "#fff")}
          onMouseOut={(e) => (e.target.style.color = "#bbb")}
        >
          <FaLinkedin />
        </a>
      </div>
    </header>
  );
}

export default Navbar;
