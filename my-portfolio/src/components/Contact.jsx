import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  const footerStyle = {
    background: "linear-gradient(135deg, #141E30, #243B55)",
    color: "#fff",
    padding: "36px 20px",
    fontFamily: "'Poppins', sans-serif",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "40px",
  };

  const profileStyle = {
    flex: "1 1 250px",
    textAlign: "center",
  };

  const profileImgStyle = {
    width: "140px",
    height: "140px",
    borderRadius: "15px",
    objectFit: "cover",
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
    marginBottom: "15px",
  };

  const contactStyle = {
    flex: "2 1 400px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  };

  const contactItemStyle = {
    display: "flex",
    alignItems: "center",
    fontSize: "1.1rem",
    gap: "12px",
    color: "#fff",
  };

  const socialStyle = {
    display: "flex",
    gap: "20px",
    marginTop: "15px",
  };

  const socialLinkStyle = {
    color: "#fff",
    fontSize: "1.5rem",
    transition: "color 0.3s ease",
  };

  const copyrightStyle = {
    width: "100%",
    textAlign: "center",
    color: "#bbb",
    fontSize: "0.9rem",
  };

  return (
    <footer style={footerStyle}>
      {/* Profile Image */}
      <div style={profileStyle}>
        <img src="/surendhar.jpg" alt="Surendhar" style={profileImgStyle} />
        <div>Surendhar K</div>
      </div>

      {/* Contact Info & Social */}
      <div style={contactStyle}>
        <div style={contactItemStyle}>
          <FaEnvelope /> sureak2001@gmail.com
        </div>
        <div style={contactItemStyle}>
          <FaPhone /> +91 63831 44939
        </div>
        <div style={contactItemStyle}>
          <FaMapMarkerAlt /> Erode, Tamil Nadu, India
        </div>

        <div style={socialStyle}>
          <a
            href="https://github.com/Sure2001"
            target="_blank"
            rel="noreferrer"
            style={socialLinkStyle}
            onMouseOver={(e) => (e.target.style.color = "#00d4ff")}
            onMouseOut={(e) => (e.target.style.color = "#fff")}
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/surendhar-k-772503365"
            target="_blank"
            rel="noreferrer"
            style={socialLinkStyle}
            onMouseOver={(e) => (e.target.style.color = "#00d4ff")}
            onMouseOut={(e) => (e.target.style.color = "#fff")}
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div style={copyrightStyle}>
        &copy; {new Date().getFullYear()} Surendhar K. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
