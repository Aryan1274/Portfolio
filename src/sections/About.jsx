import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const cards = [
    { icon: Code, title: 'Development', text: 'Building robust and scalable applications.' },
    { icon: Palette, title: 'Design', text: 'Crafting intuitive and beautiful user interfaces.' },
    { icon: Zap, title: 'Performance', text: 'Optimizing for speed and seamless interactions.' },
    { icon: User, title: 'User Focus', text: 'Designing experiences centered around the user.' }
  ];

  return (
    <section id="about" className="py-24 bg-surface relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Image Side */}
          <motion.div 
            {...fadeIn}
            className="lg:w-1/2 relative"
          >
            <div className="w-full aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-3xl rotate-6 opacity-20 blur-xl animate-pulse"></div>
              <div className="relative w-full h-full bg-card rounded-3xl border border-white/10 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                  alt="Profile" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl border border-white/10 hidden sm:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400">
                    <Code size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Experience</p>
                    <p className="text-xl font-bold">3+ Years</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Side */}
          <div className="lg:w-1/2">
            <motion.div {...fadeIn}>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Passionate about <span className="text-gradient">Innovation</span>
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                I am a creative developer based in India, dedicated to building high-end digital solutions that push the boundaries of the web. With a strong foundation in both design and engineering, I create products that are not only functional but also visually stunning.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {cards.map((card, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-6 bg-card rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500/10 group-hover:text-purple-400 transition-all">
                      <card.icon size={20} />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{card.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{card.text}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
