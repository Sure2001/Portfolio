import { color, motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaPhone} from 'react-icons/fa';

function Contact() {
  const sectionStyle = {
    padding: '80px 20px',
  background: 'linear-gradient(135deg, #f8f9fa, #e0eafc)',
    textAlign: 'center',
    color: '#fff',
  };

  const headingStyle = {
    fontSize: '2.8rem',
    marginBottom: '40px',
    fontWeight: 'bold',
    color: '#ff0000ff',
  };

  const infoStyle = {
    fontSize: '1.2rem',
    margin: '15px 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    color: '#333',
  };

  const iconStyle = {
    fontSize: '1.2rem',
    color: 'black',
  };

 

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="contact" style={sectionStyle}>
      <motion.h2
        style={headingStyle}
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
      >
        📞 Get in Touch
      </motion.h2>

      <motion.div
        style={infoStyle}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <FaEnvelope style={iconStyle} />
        <span>sureak2001@gmail.com</span>
      </motion.div>

      <motion.div
        style={infoStyle}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <FaPhone style={iconStyle} />
        <span>+91 63831 44939 & +91 93608 64908</span>
      </motion.div>

      <motion.div
        style={infoStyle}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <FaMapMarkerAlt style={iconStyle} />
        <span>Erode, Tamil Nadu, India</span>
      </motion.div>

     
     
    </section>
  );
}

export default Contact;
