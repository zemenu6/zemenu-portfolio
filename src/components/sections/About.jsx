import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaLightbulb } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Who I Am</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                I'm a passionate Software Engineering student with a deep interest in artificial intelligence, 
                mobile development, and cybersecurity. Currently in my 4th year, I'm focused on building 
                practical solutions that leverage cutting-edge technologies.
              </p>
              <p className="text-gray-400 leading-relaxed">
                My journey in tech has led me to explore machine learning models, develop cross-platform 
                mobile applications, and understand security vulnerabilities to build safer systems.
              </p>
            </div>

            <div className="space-y-6">
              <div className="glass-card p-6 flex items-start gap-4">
                <FaGraduationCap className="text-primary text-3xl flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold mb-2">Education</h4>
                  <p className="text-gray-400">Software Engineering Student</p>
                  <p className="text-gray-500">Expected Graduation: 2026</p>
                </div>
              </div>

              <div className="glass-card p-6 flex items-start gap-4">
                <FaCode className="text-secondary text-3xl flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold mb-2">Focus Areas</h4>
                  <p className="text-gray-400">Machine Learning, Flutter Development, Cybersecurity, Bash Scripting</p>
                </div>
              </div>

              <div className="glass-card p-6 flex items-start gap-4">
                <FaLightbulb className="text-accent text-3xl flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-semibold mb-2">Interests</h4>
                  <p className="text-gray-400">AI for Social Good, Mobile UX, Ethical Hacking, Open Source</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
