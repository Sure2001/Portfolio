import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

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
      width: "96%",
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
    leftSection: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
    },
    logoImg: {
      width: "48px",
      height: "48px",
      borderRadius: "50%",
      objectFit: "cover",
      border: "2px solid #fff",
      boxShadow: "0 0 10px rgba(255,255,255,0.4)",
    },
    nameText: {
      fontWeight: "bold",
      fontSize: "1.3rem",
      letterSpacing: "2px",
      background: "linear-gradient(to right, #ff6a00, #ee0979)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    toggleBtn: {
      background: "transparent",
      border: "none",
      color: "white",
      fontSize: "1.8rem",
      display: isMobile ? "block" : "none",
      cursor: "pointer",
      outline: "none",
    },
    navMenu: {
      display: isMobile ? (isOpen ? "flex" : "none") : "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: "25px",
      position: isMobile ? "absolute" : "static",
      top: isMobile ? "70px" : undefined,
      left: 0,
      width: isMobile ? "100%" : "auto",
      background: isMobile ? "linear-gradient(180deg, #141E30, #243B55)" : "transparent",
      padding: isMobile ? "25px 0" : "0",
      alignItems: "center",
      textAlign: "center",
      transition: "all 0.4s ease-in-out",
    },
    navLink: {
      color: "#ddd",
      textDecoration: "none",
      fontSize: "1rem",
      fontWeight: "500",
      position: "relative",
      transition: "color 0.3s ease",
    },
    navLinkHover: {
      color: "#fff",
    },
    socialLinks: {
      display: "flex",
      gap: "18px",
      flexDirection: isMobile ? "column" : "row",
      marginTop: isMobile ? "15px" : 0,
    },
    socialLink: {
      color: "#bbb",
      textDecoration: "none",
      fontSize: "1rem",
      transition: "color 0.3s ease",
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
        <div style={styles.socialLinks}>
          <a
            href="https://github.com/Sure2001"
            target="_blank"
            rel="noreferrer"
            style={styles.socialLink}
            onMouseOver={(e) => (e.target.style.color = "#fff")}
            onMouseOut={(e) => (e.target.style.color = "#bbb")}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/surendhar-k-772503365"
            target="_blank"
            rel="noreferrer"
            style={styles.socialLink}
            onMouseOver={(e) => (e.target.style.color = "#fff")}
            onMouseOut={(e) => (e.target.style.color = "#bbb")}
          >
            LinkedIn
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
