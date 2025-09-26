import { motion } from "framer-motion";

function About() {
  const sectionStyle = {
    padding: "100px 20px",
    background: "#f5f7fb", // subtle soft background
    fontFamily: "'Inter', sans-serif",
    color: "#1f2937", // darker grey for readability
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  };

  const headingStyle = {
    fontSize: "3rem",
    fontWeight: "800",
    color: "#1d4ed8", // vibrant blue
    marginBottom: "60px",
    letterSpacing: "1px",
  };

  const cardContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
    maxWidth: "1100px",
    width: "100%",
  };

  const cardStyle = {
    background: "linear-gradient(145deg, #ffffff, #e6f0ff)",
    padding: "30px 25px",
    borderRadius: "20px",
    boxShadow: "0 15px 35px rgba(0,0,0,0.08)",
    transition: "all 0.3s ease-in-out",
    textAlign: "left",
  };

  const cardHeading = {
    fontSize: "1.4rem",
    fontWeight: "700",
    marginBottom: "12px",
    color: "#2563eb",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };

  const cardText = {
    fontSize: "1rem",
    lineHeight: "1.7",
    color: "#374151", // soft dark grey
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
          whileHover={{ scale: 1.05, boxShadow: "0 20px 50px rgba(0,0,0,0.15)" }}
          transition={{ duration: 0.3 }}
        >
          <h3 style={cardHeading}>🎓 Education</h3>
          <p style={cardText}>
            I hold a <strong>Master of Commerce (M.Com)</strong> degree and later transitioned into{" "}
            <strong>web development</strong> with structured IT training.
          </p>
        </motion.div>

        <motion.div
          style={cardStyle}
          whileHover={{ scale: 1.05, boxShadow: "0 20px 50px rgba(0,0,0,0.15)" }}
          transition={{ duration: 0.3 }}
        >
          <h3 style={cardHeading}>💻 Training</h3>
          <p style={cardText}>
            Completed my <strong>Web Development course</strong> at{" "}
            <strong>Nschool Academy</strong>, gaining expertise in <strong>full-stack technologies</strong>.
          </p>
        </motion.div>

        <motion.div
          style={cardStyle}
          whileHover={{ scale: 1.05, boxShadow: "0 20px 50px rgba(0,0,0,0.15)" }}
          transition={{ duration: 0.3 }}
        >
          <h3 style={cardHeading}>⚡ Skills</h3>
          <p style={cardText}>
            Hands-on experience with both <strong>MERN</strong> (MongoDB, Express.js, React.js, Node.js) and{" "}
            <strong>MEAN</strong> (MongoDB, Express.js, Angular, Node.js) stack technologies.
          </p>
        </motion.div>

        <motion.div
          style={cardStyle}
          whileHover={{ scale: 1.05, boxShadow: "0 20px 50px rgba(0,0,0,0.15)" }}
          transition={{ duration: 0.3 }}
        >
          <h3 style={cardHeading}>🚀 Focus</h3>
          <p style={cardText}>
            Passionate about building <strong>scalable</strong>, <strong>secure</strong>, and{" "}
            <strong>high-performance</strong> web applications while continuously learning and improving.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
