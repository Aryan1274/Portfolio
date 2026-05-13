import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Code, User, Share2, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ['Full Stack Developer', 'UI/UX Designer', 'Creative Developer', 'Tech Enthusiast'];
  const containerRef = useRef(null);

  // Mouse parallax motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for mouse movement
  const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

  // Transforms for parallax layers
  const layer1X = useTransform(springX, [-500, 500], [-20, 20]);
  const layer1Y = useTransform(springY, [-500, 500], [-20, 20]);
  const layer2X = useTransform(springX, [-500, 500], [-40, 40]);
  const layer2Y = useTransform(springY, [-500, 500], [-40, 40]);
  const layer3X = useTransform(springX, [-500, 500], [-60, 60]);
  const layer3Y = useTransform(springY, [-500, 500], [-60, 60]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX - innerWidth / 2);
      mouseY.set(clientY - innerHeight / 2);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(interval);
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="section-wrapper min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background Animated Blobs */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          style={{ x: layer1X, y: layer1Y }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px]"
        />
        <motion.div 
          style={{ x: layer2X, y: layer2Y }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[120px]"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      </div>

      {/* Decorative Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              y: [0, -40, 0],
            }}
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              x: i % 2 === 0 ? layer2X : layer3X,
              y: i % 2 === 0 ? layer2Y : layer3Y,
            }}
            transition={{ 
              duration: 8 + Math.random() * 4, 
              repeat: Infinity,
              delay: Math.random() * 5
            }}
            className="absolute px-4 py-2 glass rounded-full border border-white/5"
          >
            <div className="text-[10px] font-mono text-purple-400/60 font-bold tracking-widest uppercase">
              {['<div>', 'const', '=>', 'import', 'render', 'async'][i]}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 px-6 py-2 glass rounded-full text-xs font-bold uppercase tracking-[0.3em] text-purple-400 border border-purple-500/20 inline-block shadow-lg shadow-purple-500/10"
        >
          Available for new opportunities
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-7xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.9]"
        >
          I'm <span className="text-gradient">Aryan</span> <br />
          <div className="h-24 md:h-32 overflow-hidden inline-flex items-center">
            <motion.span
              key={roleIndex}
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -80, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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
          className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mt-[60px] mb-[120px] leading-relaxed px-10"
        >
          Crafting digital experiences that merge cutting-edge technology with premium design aesthetics. 
          Specializing in high-performance web applications and immersive animations.
        </motion.p>

        <div className="flex flex-col items-center gap-[100px] mb-[150px]">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <a 
              href="#projects" 
              className="group px-10 py-5 bg-white text-black font-bold rounded-2xl hover:scale-105 transition-all duration-300 flex items-center gap-3 shadow-2xl shadow-white/10"
            >
              View Projects
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="px-10 py-5 glass text-white font-bold rounded-2xl hover:bg-white/10 hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Contact Me
            </a>
          </motion.div>

          {/* Social Links Area */}
          <div className="flex flex-col items-center gap-8">
            <div className="flex gap-6">
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
                  whileHover={{ 
                    y: -10, 
                    rotateX: 15, 
                    rotateY: 15,
                    boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)"
                  }}
                  className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-gray-400 hover:text-white hover:border-purple-500/50 transition-all perspective-1000"
                >
                  <social.Icon size={24} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator - Pushed Down to Bottom */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 pointer-events-none"
      >
        <span className="text-xs uppercase tracking-[0.5em] text-gray-600 font-black">Scroll</span>
        <div className="w-[1px] h-24 bg-gradient-to-b from-purple-500/50 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
