import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowUpRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      title: 'The Future of Web Design in 2026',
      excerpt: 'Exploring how AI and spatial computing are reshaping the digital landscape and user expectations.',
      date: 'May 10, 2026',
      readTime: '5 min read',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000'
    },
    {
      title: 'Mastering Framer Motion for Immersive UX',
      excerpt: 'A deep dive into advanced animation techniques that make your websites feel alive and responsive.',
      date: 'May 05, 2026',
      readTime: '8 min read',
      category: 'Development',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000'
    },
    {
      title: 'Building Scalable Next.js Applications',
      excerpt: 'Best practices for architecture, state management, and performance optimization in large-scale projects.',
      date: 'April 28, 2026',
      readTime: '12 min read',
      category: 'Tech',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000'
    }
  ];

  return (
    <section id="blog" className="py-24 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Latest <span className="text-gradient">Insights</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400"
            >
              Thoughts on design, development, and the future of technology.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card rounded-3xl border border-white/5 overflow-hidden hover:border-purple-500/30 transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 glass rounded-full text-[10px] font-bold uppercase tracking-widest text-purple-400">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-500 text-sm mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <a 
                  href="#" 
                  className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-purple-400 transition-colors"
                >
                  Read Article
                  <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
