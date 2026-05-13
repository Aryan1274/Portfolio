import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-featured online store with real-time inventory and payment integration.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
      tech: ['Next.js', 'Stripe', 'Tailwind', 'MongoDB'],
      github: '#',
      live: '#'
    },
    {
      title: 'AI Image Generator',
      description: 'A creative tool that generates unique images using stable diffusion models.',
      image: 'https://images.unsplash.com/photo-1675271591211-126ad94e495d?auto=format&fit=crop&q=80&w=1000',
      tech: ['React', 'Python', 'OpenAI', 'Cloudinary'],
      github: '#',
      live: '#'
    },
    {
      title: 'Real-time Chat App',
      description: 'Secure and fast messaging application with group chats and media sharing.',
      image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=1000',
      tech: ['Socket.io', 'Node.js', 'Redis', 'React'],
      github: '#',
      live: '#'
    }
  ];

  return (
    <section id="projects" className="py-[180px] bg-surface relative my-32 overflow-hidden">
      <div className="container mx-auto px-12 lg:px-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-[140px] gap-12">
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Featured <span className="text-gradient">Projects</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400"
            >
              A selection of my favorite works, ranging from small interactive components to large-scale web applications.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <a href="#" className="text-sm font-bold uppercase tracking-widest text-purple-400 hover:text-white transition-colors">
              View All Work →
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-card rounded-3xl border border-white/5 overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60"></div>
                
                {/* Tech Badges on Image */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {project.tech.slice(0, 2).map((tech, tIndex) => (
                    <span key={tIndex} className="px-3 py-1 glass rounded-full text-[10px] font-bold uppercase tracking-widest">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <a 
                    href={project.github} 
                    className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-colors"
                  >
                    <Code size={18} />
                    Code
                  </a>
                  <a 
                    href={project.live} 
                    className="flex items-center gap-2 text-sm font-bold text-purple-400 hover:text-white transition-colors"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>
              </div>
              
              {/* Accent Glow */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
