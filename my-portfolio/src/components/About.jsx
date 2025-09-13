import { motion } from "framer-motion";

function About() {
  const sectionStyle = {
    padding: "100px 20px",
    background: "linear-gradient(135deg, #e0eafc, #f8f9fa)",
    fontFamily: "Arial, sans-serif",
    color: "#1e1e2f",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "2.8rem",
    fontWeight: "bold",
    color: "#ff0000ff",
    marginBottom: "50px",
    textTransform: "uppercase",
    letterSpacing: "2px",
  };

  const cardContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "25px",
    maxWidth: "1000px",
    width: "100%",
  };

  const cardStyle = {
    background: "white",
    padding: "30px 25px",
    borderRadius: "15px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease-in-out",
    textAlign: "left",
  };

  const cardHeading = {
    fontSize: "1.3rem",
    fontWeight: "bold",
    marginBottom: "10px",
    color: "#0077ff",
  };

  const cardText = {
    fontSize: "1rem",
    lineHeight: "1.6",
    color: "#444",
  };

  return (
    <section id="about" style={sectionStyle}>
      <motion.h2
        style={headingStyle}
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <div style={cardContainer}>
        <motion.div
          style={cardStyle}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h3 style={cardHeading}>🎓 Education</h3>
          <p style={cardText}>
            I hold a <strong>Master of Commerce (M.Com)</strong> degree and
            later transitioned into <strong>web development</strong> with
            structured IT training.
          </p>
        </motion.div>

        <motion.div
          style={cardStyle}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h3 style={cardHeading}>💻 Training</h3>
          <p style={cardText}>
            Completed my <strong>Web Development course</strong> at{" "}
            <strong>Nschool Academy</strong>, gaining expertise in{" "}
            <strong>full-stack technologies</strong>.
          </p>
        </motion.div>

        <motion.div
          style={cardStyle}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h3 style={cardHeading}>⚡ Skills</h3>
          <p style={cardText}>
            Hands-on experience with both{" "}
            <strong>MERN</strong> (MongoDB, Express.js, React.js, Node.js) and{" "}
            <strong>MEAN</strong> (MongoDB, Express.js, Angular, Node.js) stack
            technologies.
          </p>
        </motion.div>

        <motion.div
          style={cardStyle}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <h3 style={cardHeading}>🚀 Focus</h3>
          <p style={cardText}>
            Passionate about building <strong>scalable</strong>,{" "}
            <strong>secure</strong>, and <strong>high-performance</strong> web
            applications while continuously learning and improving.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
