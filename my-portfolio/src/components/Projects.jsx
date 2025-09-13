function Projects() {
  const sectionStyle = {
    padding: "80px 20px",
    background: "linear-gradient(135deg, #fdfbfb, #e3f2fd)", // light gradient
    fontFamily: "Arial, sans-serif",
    minHeight: "100vh",
  };

  const headingStyle = {
    fontSize: "3rem",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "50px",
    color: "#1976d2", // blue
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
    maxWidth: "1100px",
    margin: "0 auto",
  };

  const cardStyle = {
    background: "#ffffffcc", // soft white
    borderRadius: "20px",
    padding: "25px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
    backdropFilter: "blur(6px)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  const titleStyle = {
    fontSize: "1.5rem",
    fontWeight: "700",
    marginBottom: "12px",
    color: "#ef6c00",
    textDecoration: "none",
  };

  const techContainer = {
    marginTop: "15px",
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  };

  const techTag = {
    padding: "6px 14px",
    background: "linear-gradient(135deg, #42a5f5, #81c784)", // blue-green tags
    color: "#fff",
    borderRadius: "20px",
    fontSize: "0.85rem",
    fontWeight: "500",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  };

  const projects = [
    {
      title: "🌐 Digital Website",
      url: "https://dgitalweb.netlify.app",
      tech: ["HTML", "CSS", "Bootstrap 5"],
    },
    {
      title: "💻 Online Skill Course Website",
      url: "https://online-skill-course.netlify.app",
      tech: ["React", "JavaScript", "Node.js", "MongoDB"],
    },
    {
      title: "🎮 Lugx Gaming Website",
      url: "https://lugx-gaming-anglar.netlify.app",
      tech: ["Angular 14", "TypeScript", "Express", "MongoDB"],
    },
    {
      title: "👨‍💼 Employee Master Screen",
      url: "https://employee-master-screen.netlify.app",
      tech: ["Angular 14", "TypeScript", "Express", "MongoDB"],
    },
  ];

  return (
    <section id="projects" style={sectionStyle}>
      <h2 style={headingStyle}>🚀 My Projects</h2>
      <div style={gridStyle}>
        {projects.map((project, index) => (
          <div
            key={index}
            style={cardStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px)";
              e.currentTarget.style.boxShadow =
                "0 12px 24px rgba(0,0,0,0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 8px 20px rgba(0,0,0,0.1)";
            }}
          >
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              style={titleStyle}
            >
              {project.title}
            </a>
            <div style={techContainer}>
              {project.tech.map((t, i) => (
                <span key={i} style={techTag}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
