function Projects() {
  const sectionStyle = {
    padding: '60px 20px',
     background: 'linear-gradient(135deg, #f8f9fa, #e0eafc)',
    textAlign: 'center',
    minHeight: '50vh',
  };

  const headingStyle = {
    fontSize: '3rem',
    fontWeight: '700',
    marginBottom: '40px',
    color: '#ff0000ff',
  };

  const listStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: 0,
    listStyle: 'none',
  };

  const itemBaseStyle = {
    background: 'linear-gradient(145deg, #ffffff, #e6e6e6)',
    borderRadius: '16px',
    padding: '30px',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    cursor: 'pointer',
    transform: 'scale(1)',
  };

  const itemHoverStyle = {
    transform: 'scale(1.05)',
    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.2)',
  };

  const linkStyle = {
    textDecoration: 'none',
    fontSize: '1.4rem',
    fontWeight: '600',
    color: '#0077cc',
  };

  const techStyle = {
    marginTop: '10px',
    fontSize: '1rem',
    color: '#555',
  };

  const projects = [
    {
      title: '🌐 Dgital Website',
      url: 'https://dgitalweb.netlify.app',
      tech: 'HTML, CSS, Bootstrap 5',
    },
    {
      title: '💻 Online Skill Course Website',
      url: 'https://online-skill-course.netlify.app',
      tech: 'React, JavaScript, Node.js, MongoDB',
    },
    {
      title: '🎮 Lugx Gaming Website',
      url: 'https://lugx-gaming-anglar.netlify.app',
      tech: 'Angular 14, TypeScript, Express, MongoDB',
    },
  ];

  const handleMouseEnter = (e) => {
    Object.assign(e.currentTarget.style, itemHoverStyle);
  };

  const handleMouseLeave = (e) => {
    Object.assign(e.currentTarget.style, itemBaseStyle);
  };

  return (
    <section id="projects" style={sectionStyle}>
      <h2 style={headingStyle}>🚀 MY PROJECTS</h2>
      <ul style={listStyle}>
        {projects.map((project, index) => (
          <li
            key={index}
            style={{ ...itemBaseStyle }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a href={project.url} target="_blank" rel="noopener noreferrer" style={linkStyle}>
              {project.title}
            </a>
            <p style={techStyle}>{project.tech}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
