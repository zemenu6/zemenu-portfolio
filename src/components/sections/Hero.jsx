import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import profileImage from '../../assets/zemenu.png';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <img 
              src={profileImage} 
              alt="Zemenu Yesgat" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto border-4 border-primary/50 shadow-lg shadow-primary/25"
            />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I'm <span className="gradient-text">Zemenu Yesgat</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-6">
            Software Engineering Student | AI Enthusiast | Security Researcher
          </p>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            Building intelligent systems with Machine Learning, crafting mobile experiences with Flutter, 
            and exploring cybersecurity. Expected graduation: 2026
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn-outline">
              Get In Touch
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-primary transition-all hover:scale-110">
              <FaGithub size={28} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-primary transition-all hover:scale-110">
              <FaLinkedin size={28} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
