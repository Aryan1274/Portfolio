import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const projects = [
  {
    title: 'Modern E-Commerce Platform',
    category: 'Full Stack Development',
    tags: ['React', 'Next.js', 'Node.js', 'Tailwind'],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1600',
    link: '#',
    color: '#00f0ff',
  },
  {
    title: 'Task Management App',
    category: 'Product Design',
    tags: ['React', 'Framer Motion', 'Supabase'],
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?auto=format&fit=crop&q=80&w=1600',
    link: '#',
    color: '#9b5de5',
  },
  {
    title: 'Weather Dashboard',
    category: 'Web Application',
    tags: ['React', 'API Integration', 'Charts'],
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&q=80&w=1600',
    link: '#',
    color: '#00ff87',
  },
];

/* 3-D tilt on hover */
const TiltCard = ({ children, color, floatDelay }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX, rotateY,
        transformStyle: 'preserve-3d',
        perspective: 800,
      }}
      /* Continuous gentle float */
      animate={{ y: [0, -12, 0] }}
      transition={{
        y: { duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: floatDelay },
      }}
    >
      {children}
    </motion.div>
  );
};

const ProjectCard = ({ project, i }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
  >
    <TiltCard color={project.color} floatDelay={i * 0.9}>
      <div
        className="card group cursor-none"
        style={{
          position: 'relative',
          background: 'var(--bg-card)',
          border: `1px solid rgba(255,255,255,0.06)`,
          transition: 'border-color 0.4s ease, box-shadow 0.4s ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = `${project.color}33`;
          e.currentTarget.style.boxShadow = `0 30px 70px rgba(0,0,0,0.5), 0 0 40px ${project.color}18`;
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {/* Shimmer sweep on hover */}
        <div className="project-shimmer" />

        <div className="relative aspect-[16/10] overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.7 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent opacity-60" />
          {/* Category pill */}
          <div style={{
            position: 'absolute', top: '1rem', left: '1rem',
            padding: '0.3rem 0.85rem',
            background: 'rgba(0,0,0,0.6)',
            border: `1px solid ${project.color}44`,
            borderRadius: '100px',
            fontSize: '0.6rem', fontWeight: 700,
            letterSpacing: '0.15em', textTransform: 'uppercase',
            color: project.color,
            backdropFilter: 'blur(8px)',
          }}>
            {project.category}
          </div>
        </div>

        <div className="p-8">
          <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-[#00f0ff] transition-colors">
            {project.title}
          </h3>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map(tag => (
              <span key={tag} style={{
                padding: '0.25rem 0.75rem',
                background: `${project.color}0d`,
                border: `1px solid ${project.color}22`,
                borderRadius: '100px',
                fontSize: '0.6rem', fontWeight: 600,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.5)',
              }}>{tag}</span>
            ))}
          </div>

          <a href={project.link} className="inline-flex items-center gap-3 text-white text-xs font-bold tracking-widest uppercase group/link">
            View Project
            <motion.div
              whileHover={{ scale: 1.2, backgroundColor: project.color }}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center transition-colors"
              style={{ color: 'white' }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </motion.div>
          </a>
        </div>
      </div>
    </TiltCard>
  </motion.div>
);

const sectionVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const headingVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

const Projects = () => (
  <section id="projects" className="section bg-secondary">
    <div className="section-inner">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8"
      >
        <div className="max-w-xl">
          <motion.p variants={headingVariants} className="text-label text-[#00f0ff] mb-6">
            03 — Featured Projects
          </motion.p>
          <motion.h2 variants={headingVariants} className="text-huge">
            Building <span className="text-white">digital</span> products that matter.
          </motion.h2>
        </div>
        <motion.div variants={headingVariants}>
          <a href="#" className="btn-outline">View All Works</a>
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: '1200px' }}>
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} i={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
