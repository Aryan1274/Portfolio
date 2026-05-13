import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

const posts = [
  {
    title: 'The Future of Web Design in 2026',
    date: 'May 10, 2026',
    readTime: '5 min read',
    tag: 'Design',
    color: '#00f0ff',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600',
  },
  {
    title: 'Mastering Framer Motion for Immersive UX',
    date: 'May 05, 2026',
    readTime: '8 min read',
    tag: 'Animation',
    color: '#9b5de5',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1600',
  },
  {
    title: 'Building Scalable Next.js Applications',
    date: 'April 28, 2026',
    readTime: '12 min read',
    tag: 'Development',
    color: '#00ff87',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1600',
  },
];

/* 3D tilt wrapper */
const TiltBlogCard = ({ children, floatDelay }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 180, damping: 18 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 180, damping: 18 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const rect = ref.current.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 900 }}
      animate={{ y: [0, -10, 0] }}
      transition={{ y: { duration: 4 + floatDelay * 0.5, repeat: Infinity, ease: 'easeInOut', delay: floatDelay } }}
    >
      {children}
    </motion.div>
  );
};

const BlogCard = ({ post, i }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.8, delay: i * 0.13, ease: [0.22, 1, 0.36, 1] }}
  >
    <TiltBlogCard floatDelay={i * 1.1}>
      <div
        className="card group cursor-none h-full flex flex-col"
        style={{ position: 'relative', overflow: 'hidden' }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = `${post.color}33`;
          e.currentTarget.style.boxShadow = `0 30px 70px rgba(0,0,0,0.5), 0 0 40px ${post.color}15`;
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {/* Shimmer sweep */}
        <div className="blog-shimmer" />

        {/* Image */}
        <div className="relative aspect-video overflow-hidden">
          <motion.img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.7 }}
          />
          {/* Gradient overlay */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(3,3,3,0.7) 100%)' }} />

          {/* Tag pill */}
          <div style={{
            position: 'absolute', top: '1rem', left: '1rem',
            padding: '0.3rem 0.9rem',
            background: 'rgba(0,0,0,0.6)',
            border: `1px solid ${post.color}55`,
            borderRadius: '100px',
            fontSize: '0.6rem', fontWeight: 700,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: post.color,
            backdropFilter: 'blur(8px)',
          }}>{post.tag}</div>

          {/* Read time */}
          <div style={{
            position: 'absolute', top: '1rem', right: '1rem',
            padding: '0.3rem 0.9rem',
            background: 'rgba(0,0,0,0.6)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '100px',
            fontSize: '0.6rem', fontWeight: 600,
            color: 'rgba(255,255,255,0.6)',
            backdropFilter: 'blur(8px)',
          }}>{post.readTime}</div>
        </div>

        {/* Content */}
        <div className="p-8 flex-grow flex flex-col">
          <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: post.color, marginBottom: '0.85rem' }}>
            {post.date}
          </p>
          <h3 className="text-xl font-bold text-white mb-6 group-hover:text-[#00f0ff] transition-colors leading-tight flex-grow">
            {post.title}
          </h3>

          {/* Animated read-more line */}
          <div className="mt-auto">
            <a href="#" className="inline-flex items-center gap-4 text-white text-[10px] font-bold tracking-[0.3em] uppercase group/link">
              Read Article
              <motion.div
                className="h-px bg-white/20"
                style={{ width: '32px' }}
                whileHover={{ width: '64px' }}
                transition={{ duration: 0.3 }}
              />
            </a>
          </div>
        </div>

        {/* Bottom accent bar */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.15 + 0.3 }}
          style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            height: '2px',
            background: `linear-gradient(90deg, ${post.color}, transparent)`,
            transformOrigin: 'left',
          }}
        />
      </div>
    </TiltBlogCard>
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

const Blog = () => (
  <section id="blog" className="section bg-primary">
    <div className="section-inner">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8"
      >
        <div className="max-w-xl">
          <motion.p variants={headingVariants} className="text-label text-[#9b5de5] mb-6">
            04 — Insights &amp; Ideas
          </motion.p>
          <motion.h2 variants={headingVariants} className="text-huge">
            Thoughts on <span className="text-white">design</span> &amp; tech.
          </motion.h2>
        </div>
        <motion.div variants={headingVariants}>
          <a href="#" className="btn-outline">Browse All Posts</a>
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" style={{ perspective: '1200px' }}>
        {posts.map((post, i) => (
          <BlogCard key={post.title} post={post} i={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Blog;
