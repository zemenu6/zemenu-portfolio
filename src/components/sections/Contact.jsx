import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const contactLinks = [
    { icon: FaGithub, label: 'GitHub', href: 'https://github.com', color: 'hover:text-gray-400' },
    { icon: FaLinkedin, label: 'LinkedIn', href: 'https://linkedin.com', color: 'hover:text-blue-500' },
    { icon: FaEnvelope, label: 'Email', href: 'mailto:zemenu@example.com', color: 'hover:text-red-500' },
    { icon: FaTwitter, label: 'Twitter', href: 'https://twitter.com', color: 'hover:text-sky-500' },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-dark-bg/50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, opportunities, or collaborations. 
            Feel free to reach out!
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {contactLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className={`glass-card p-6 flex flex-col items-center gap-3 transition-colors ${link.color}`}
              >
                <link.icon size={40} />
                <span className="text-sm font-medium">{link.label}</span>
              </motion.a>
            ))}
          </div>

          <div className="glass-card p-8">
            <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
            <p className="text-gray-400 mb-6">
              Currently seeking internship opportunities and open to freelance projects
            </p>
            <a href="mailto:zemenu@example.com" className="btn-primary inline-block">
              Send Me an Email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
