import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  const Icon = project.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="glass-card p-6 group"
    >
      <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center mb-4`}>
        <Icon className="text-3xl text-white" />
      </div>

      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      
      <p className="text-gray-400 mb-4 leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-sm bg-dark-bg/50 border border-dark-border rounded-full text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <a
          href={project.github}
          className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
        >
          <FaGithub size={20} />
          <span>Code</span>
        </a>
        <a
          href={project.demo}
          className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors"
        >
          <FaExternalLinkAlt size={18} />
          <span>Demo</span>
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
