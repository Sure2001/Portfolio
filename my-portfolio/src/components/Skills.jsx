import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiRedux, SiMongodb, SiExpress, SiAngular, SiPostman, SiNetlify } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

function Skills() {
  const categories = ['Frontend', 'Backend', 'Tools'];
  const [category, setCategory] = useState('Frontend');

  // ⏩ Auto-slider: cycle every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCategory(prev => {
        const nextIndex = (categories.indexOf(prev) + 1) % categories.length;
        return categories[nextIndex];
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const sectionStyle = {
    padding: '80px 20px',
    background: 'linear-gradient(135deg, #f8f9fa, #e0eafc)',
    textAlign: 'center',
    minHeight: '65vh',
  };

  const headingStyle = {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#ff0000ff',
  };

  const buttonGroup = {
    margin: '20px 0',
  };

  const buttonStyle = (active) => ({
    margin: '0 10px',
    padding: '10px 20px',
    borderRadius: '30px',
    border: '2px solid transparent',
    cursor: 'pointer',
    backgroundColor: active ? '#ff0000ff' : '#eee',
    color: active ? '#fff' : '#333',
    fontWeight: 'bold',
    transition: 'all 0.3s',
  });

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
    gap: '30px',
    maxWidth: '1000px',
    margin: '0 auto',
    paddingTop: '20px',
  };

  const skillItem = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '0.95rem',
    fontWeight: 'bold',
    color: '#333',
    backgroundColor: '#fff',
    borderRadius: '15px',
    padding: '20px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    border: '2px solid transparent',
    transition: 'transform 0.3s, border 0.5s',
  };

  const iconStyle = {
    fontSize: '2rem',
    marginBottom: '8px',
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const skillData = {
    Frontend: [
      { icon: <FaHtml5 style={iconStyle} color="#E34F26" />, label: 'HTML5' },
      { icon: <FaCss3Alt style={iconStyle} color="#1572B6" />, label: 'CSS3' },
      { icon: <FaBootstrap style={iconStyle} color="#7952B3" />, label: 'Bootstrap' },
      { icon: <SiJavascript style={iconStyle} color="#F7DF1E" />, label: 'JavaScript' },
      { icon: <FaReact style={iconStyle} color="#61DAFB" />, label: 'React.js' },
      { icon: <SiRedux style={iconStyle} color="#764ABC" />, label: 'Redux' },
      { icon: <SiTypescript style={iconStyle} color="#3178C6" />, label: 'TypeScript' },
      { icon: <SiAngular style={iconStyle} color="#DD0031" />, label: 'Angular 14' },
    ],
    Backend: [
      { icon: <FaNodeJs style={iconStyle} color="#339933" />, label: 'Node.js' },
      { icon: <SiExpress style={iconStyle} color="#000" />, label: 'Express.js' },
      { icon: <SiMongodb style={iconStyle} color="#47A248" />, label: 'MongoDB' },
    ],
    Tools: [
      { icon: <SiPostman style={iconStyle} color="#FF6C37" />, label: 'Postman' },
      { icon: <FaGithub style={iconStyle} color="#333" />, label: 'GitHub' },
      { icon: <SiNetlify style={iconStyle} color="#00C7B7" />, label: 'Netlify' },
      { icon: <VscCode style={iconStyle} color="#007ACC" />, label: 'VS Code' },
    ],
  };

  return (
    <section id="skills" style={sectionStyle}>
      <motion.h2 style={headingStyle} initial="hidden" whileInView="visible" variants={fadeIn}>
        🎯 MY SKILLS
      </motion.h2>

      {/* Filter Buttons */}
      <div style={buttonGroup}>
        {categories.map((cat) => (
          <button
            key={cat}
            style={buttonStyle(category === cat)}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div
        style={gridStyle}
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
      >
        {skillData[category].map((item, index) => (
          <motion.div
            key={index}
            style={skillItem}
            whileHover={{
              scale: 1.08,
              border: '2px solid',
              borderImage: 'linear-gradient(45deg, #e91e63, #2196f3) 1',
            }}
            transition={{ duration: 0.3 }}
          >
            {item.icon}
            <span>{item.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;
