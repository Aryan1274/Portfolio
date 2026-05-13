import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-[180px] bg-background relative overflow-hidden my-32">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-12 lg:px-24 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-[140px]">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Let's <span className="text-gradient">Connect</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400"
            >
              Have a project in mind or just want to say hi? I'm always open to new opportunities.
            </motion.p>
          </div>

          <div className="flex flex-col lg:flex-row gap-20">
            {/* Info Side */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/3 flex flex-col gap-8"
            >
              <div className="flex items-center gap-6 p-6 bg-card rounded-3xl border border-white/5">
                <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-400">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Email</p>
                  <p className="text-lg font-medium">hello@antigravity.dev</p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6 bg-card rounded-3xl border border-white/5">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-2xl flex items-center justify-center text-cyan-400">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Phone</p>
                  <p className="text-lg font-medium">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6 bg-card rounded-3xl border border-white/5">
                <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Location</p>
                  <p className="text-lg font-medium">Mumbai, India</p>
                </div>
              </div>
            </motion.div>

            {/* Form Side */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-2/3"
            >
              <form className="p-10 bg-card rounded-[40px] border border-white/10 space-y-6 relative group">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 ml-2">Your Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-purple-500/50 transition-colors text-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 ml-2">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-purple-500/50 transition-colors text-white"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 ml-2">Subject</label>
                  <input 
                    type="text" 
                    placeholder="Project Inquiry"
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-purple-500/50 transition-colors text-white"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 ml-2">Message</label>
                  <textarea 
                    rows="5"
                    placeholder="Tell me about your project..."
                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-purple-500/50 transition-colors text-white resize-none"
                  ></textarea>
                </div>

                <button className="w-full py-5 bg-white text-black font-bold rounded-2xl hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-3 group">
                  Send Message
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>

                {/* Animated Border Gradient */}
                <div className="absolute inset-0 rounded-[40px] border-2 border-transparent bg-gradient-to-br from-purple-500/20 to-cyan-500/20 opacity-0 group-focus-within:opacity-100 pointer-events-none transition-opacity duration-500"></div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
