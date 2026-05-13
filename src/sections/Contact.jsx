import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="section bg-secondary overflow-hidden">
      <div className="section-inner">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          {/* Left Side: Text & Info */}
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-label text-[#00ff87] mb-6"
            >
              05 — Get In Touch
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-huge mb-12"
            >
              Let's <span className="text-white">create</span> something amazing.
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg mb-16 leading-relaxed"
            >
              Have a project in mind or just want to say hi? I'm always open to new opportunities and interesting conversations.
            </motion.p>
            
            <div className="space-y-8">
              {[
                { label: 'Email', value: 'hello@aryan.dev', color: '#00f0ff' },
                { label: 'Location', value: 'Mumbai, India', color: '#9b5de5' },
                { label: 'Social', value: '@AryanDev', color: '#00ff87' }
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="group cursor-none"
                >
                  <p className="text-[10px] font-bold text-[#555] uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors" style={{ color: item.value.includes('@') ? item.color : 'white' }}>
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="card p-12 relative"
          >
            <div className="absolute top-0 right-0 p-8">
              <div className="w-2 h-2 rounded-full bg-[#00ff87] animate-pulse glow-cyan" />
            </div>
            
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[#555] uppercase tracking-[0.2em]">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#00f0ff] focus:bg-white/10 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[#555] uppercase tracking-[0.2em]">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#00f0ff] focus:bg-white/10 transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[#555] uppercase tracking-[0.2em]">Subject</label>
                <input 
                  type="text" 
                  placeholder="Project Inquiry"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#00f0ff] focus:bg-white/10 transition-all"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[#555] uppercase tracking-[0.2em]">Message</label>
                <textarea 
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-6 text-white focus:outline-none focus:border-[#00f0ff] focus:bg-white/10 transition-all resize-none"
                />
              </div>
              
              <button 
                type="submit"
                className="w-full group/btn px-10 py-5 bg-[#00f0ff] text-black font-bold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-4 cursor-none"
              >
                Send Message
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover/btn:translate-x-2 transition-transform">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
