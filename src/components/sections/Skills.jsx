import { motion } from 'framer-motion';
import { skills } from '../../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-dark-bg/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 gradient-text">
            Skills & Technologies
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <motion.div
                key={category}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-6"
              >
                <h3 className="text-xl font-semibold mb-4 text-primary">{category}</h3>
                <div className="space-y-3">
                  {items.map((skill) => (
                    <div key={skill.name} className="flex items-center gap-3">
                      <skill.icon className="text-2xl text-gray-400" />
                      <span className="text-gray-300">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
