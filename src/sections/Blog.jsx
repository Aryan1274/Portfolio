import React from 'react';
import { motion } from 'framer-motion';

const posts = [
  {
    title: 'The Future of Web Design in 2026',
    date: 'May 10, 2026',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600'
  },
  {
    title: 'Mastering Framer Motion for Immersive UX',
    date: 'May 05, 2026',
    readTime: '8 min read',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1600'
  },
  {
    title: 'Building Scalable Next.js Applications',
    date: 'April 28, 2026',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1600'
  }
];

const BlogCard = ({ post, i }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="card group cursor-none h-full flex flex-col"
    >
      <div className="relative aspect-video overflow-hidden">
        <motion.img 
          src={post.image} 
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 px-3 py-1 glass rounded-full text-[10px] font-bold text-[#00f0ff] uppercase tracking-widest">
          {post.readTime}
        </div>
      </div>
      
      <div className="p-8 flex-grow flex flex-col">
        <p className="text-[#555] text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
          {post.date}
        </p>
        <h3 className="text-2xl font-bold text-white mb-8 group-hover:text-[#00f0ff] transition-colors leading-tight">
          {post.title}
        </h3>
        
        <div className="mt-auto">
          <a href="#" className="inline-flex items-center gap-4 text-white text-[10px] font-bold tracking-[0.3em] uppercase group/link">
            Read Article
            <div className="w-8 h-px bg-white/20 transition-all group-hover/link:w-16 group-hover/link:bg-[#00f0ff]" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Blog = () => {
  return (
    <section id="blog" className="section bg-primary">
      <div className="section-inner">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-label text-[#9b5de5] mb-6"
            >
              04 — Insights & Ideas
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-huge"
            >
              Thoughts on <span className="text-white">design</span> & tech.
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a href="#" className="btn-outline">Browse All Posts</a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, i) => (
            <BlogCard key={post.title} post={post} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
