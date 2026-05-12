import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code, User, Share2, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ['Full Stack Developer', 'UI/UX Designer', 'Creative Developer', 'Tech Enthusiast'];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Animated Blobs */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]"
        />
        <motion.div 
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -60, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px]"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-6 z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 px-4 py-1 glass rounded-full text-sm font-medium text-purple-400 border border-purple-500/20 inline-block"
        >
          Available for new opportunities
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-tight"
        >
          I'm <span className="text-gradient">Aryan</span> <br />
          <div className="h-20 md:h-28 overflow-hidden inline-flex items-center">
            <motion.span
              key={roleIndex}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-white"
            >
              {roles[roleIndex]}
            </motion.span>
          </div>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          Crafting digital experiences that merge cutting-edge technology with premium design aesthetics. 
          Specializing in high-performance web applications and immersive animations.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="#projects" 
            className="group px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all duration-300 flex items-center gap-2"
          >
            View Projects
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="#contact" 
            className="px-8 py-4 glass text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Floating Social Cards */}
        <div className="mt-16 flex gap-6">
          {[
            { Icon: Code, href: '#', label: 'GitHub' },
            { Icon: User, href: '#', label: 'LinkedIn' },
            { Icon: Share2, href: '#', label: 'Twitter' }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.1 }}
              className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/50 transition-all"
            >
              <social.Icon size={20} />
            </motion.a>
          ))}
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-purple-500 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
