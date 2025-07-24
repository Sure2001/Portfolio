function About() {
  const sectionStyle = {
    padding: '80px 20px',
     background: 'linear-gradient(135deg, #f8f9fa, #e0eafc)',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    color: '#ff0000ff',
    marginBottom: '30px',
  };

  const paragraphStyle = {
    maxWidth: '900px',
    width: '100%',
    fontSize: '1.1rem',
    lineHeight: '1.8',
    marginBottom: '20px',
    padding: '0 10px',
  };

  return (
    <section id="about" style={sectionStyle}>
      <h2 style={headingStyle}>ABOUT ME</h2>
      <p style={paragraphStyle}>
        I hold a Master of Commerce (M.Com) degree and transitioned into web development through self-learning and structured training.
      </p>
      <p style={paragraphStyle}>
        I completed my Web Development course at <strong>Nschool Academy</strong>, where I gained strong expertise in full-stack technologies.
      </p>
      <p style={paragraphStyle}>
        I have hands-on experience with both <strong>MERN</strong> (MongoDB, Express.js, React.js, Node.js) and <strong>MEAN</strong> (MongoDB, Express.js, Angular 14, Node.js) stacks.
      </p>
      <p style={paragraphStyle}>
        My focus is on building scalable, secure, and high-performance web applications. I'm always learning and looking to grow as a full-stack developer.
      </p>
    </section>
  );
}

export default About;
