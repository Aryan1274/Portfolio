import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Modern E-Commerce Platform',
    category: 'Full Stack Development',
    tags: ['React', 'Next.js', 'Node.js', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1600',
    link: '#'
  },
  {
    title: 'Task Management App',
    category: 'Product Design',
    tags: ['React', 'Framer Motion', 'Supabase'],
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=1600',
    link: '#'
  },
  {
    title: 'Weather Dashboard',
    category: 'Web Application',
    tags: ['React', 'API Integration', 'Charts'],
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=1600',
    link: '#'
  }
];

const ProjectCard = ({ project, i }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="card group cursor-none"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <motion.img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-60" />
      </div>
      
      <div className="p-8">
        <p className="text-[#00f0ff] text-[0.65rem] font-bold tracking-[0.2em] uppercase mb-3">
          {project.category}
        </p>
        <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-[#00f0ff] transition-colors">
          {project.title}
        </h3>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[0.65rem] text-gray-400">
              {tag}
            </span>
          ))}
        </div>
        
        <a 
          href={project.link}
          className="inline-flex items-center gap-3 text-white text-xs font-bold tracking-widest uppercase group/link"
        >
          View Project
          <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover/link:border-[#00f0ff] group-hover/link:bg-[#00f0ff] group-hover/link:text-black transition-all">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>
        </a>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="section bg-secondary">
      <div className="section-inner">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-label text-[#00f0ff] mb-6"
            >
              03 — Featured Projects
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-huge"
            >
              Building <span className="text-white">digital</span> products that matter.
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a href="#" className="btn-outline">View All Works</a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
