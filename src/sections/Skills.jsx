import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Settings, Terminal, Database, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      skills: ['React', 'Next.js', 'Tailwind', 'Framer Motion', 'GSAP', 'TypeScript']
    },
    {
      title: 'UI/UX Design',
      icon: Layout,
      skills: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Typography']
    },
    {
      title: 'Tools & DevOps',
      icon: Settings,
      skills: ['Git', 'Docker', 'Vercel', 'Netlify', 'Postman', 'Sass']
    },
    {
      title: 'Backend',
      icon: Database,
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Firebase', 'Prisma']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-[180px] bg-background relative my-32 overflow-hidden">
      <div className="container mx-auto px-12 lg:px-24">
        <div className="text-center mb-[140px]">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            My <span className="text-gradient">Tech Stack</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-xl mx-auto"
          >
            A comprehensive list of technologies and tools I use to bring ideas to life.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-8 bg-card rounded-3xl border border-white/5 hover:border-purple-500/30 transition-all duration-300 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity pointer-events-none">
                <category.icon size={120} />
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400">
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIndex) => (
                  <span 
                    key={sIndex}
                    className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-400 hover:bg-white/10 hover:text-white transition-colors border border-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-cyan-500/0 group-hover:from-purple-500/5 group-hover:to-cyan-500/5 transition-all duration-500 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
