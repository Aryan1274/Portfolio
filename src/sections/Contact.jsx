import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const inputStyle = {
  width: '100%',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.08)',
  borderRadius: '0.875rem',
  padding: '1rem 1.4rem',
  color: '#f0f0f0',
  fontSize: '0.95rem',
  outline: 'none',
  transition: 'all 0.3s ease',
  fontFamily: "'Inter', sans-serif",
  cursor: 'text',
};

const SuccessOverlay = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.85 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.85 }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    style={{
      position: 'absolute', inset: 0,
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      background: 'rgba(14,14,14,0.98)',
      borderRadius: '1.5rem',
      zIndex: 20,
      padding: '3rem',
      textAlign: 'center',
    }}
  >
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.2, type: 'spring', stiffness: 250, damping: 18 }}
      style={{
        width: '72px', height: '72px', borderRadius: '50%',
        background: 'rgba(0,255,135,0.12)',
        border: '2px solid #00ff87',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '1.75rem',
        boxShadow: '0 0 40px rgba(0,255,135,0.2)',
      }}
    >
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00ff87" strokeWidth="2.5">
        <path d="M20 6L9 17l-5-5"/>
      </svg>
    </motion.div>
    <motion.h3
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35 }}
      style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '1.6rem', fontWeight: 800, color: '#fff', marginBottom: '0.75rem' }}
    >
      Message Sent! 🎉
    </motion.h3>
    <motion.p
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.45 }}
      style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.95rem', lineHeight: 1.7, maxWidth: '320px' }}
    >
      Thanks for reaching out! I'll get back to you within 24 hours.
    </motion.p>
    <motion.button
      onClick={() => window.location.reload()}
      style={{
        marginTop: '2rem',
        padding: '0.8rem 1.5rem',
        background: 'transparent',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '100px',
        color: 'rgba(255,255,255,0.4)',
        fontSize: '0.75rem',
        fontWeight: 600,
        cursor: 'pointer',
      }}
    >
      Send Another
    </motion.button>
  </motion.div>
);

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Valid email required';
    if (!form.subject.trim()) errs.subject = 'Subject is required';
    if (!form.message.trim()) errs.message = 'Message is required';

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-secondary overflow-hidden">
      <div className="section-inner">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          
          {/* Left Side */}
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
                  className="group"
                >
                  <p className="text-[10px] font-bold text-[#555] uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors" style={{ color: item.value.includes('@') ? item.color : 'white' }}>
                    {item.value}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="card p-12 relative"
            style={{ zIndex: 5 }}
          >
            <AnimatePresence>
              {submitted && <SuccessOverlay />}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[#555] uppercase tracking-[0.2em]">Your Name</label>
                  <input 
                    name="name"
                    type="text" 
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    style={inputStyle}
                    className="focus:border-[#00f0ff] focus:bg-white/10"
                  />
                  {errors.name && <p className="text-red-500 text-[10px] uppercase font-bold tracking-wider mt-1">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-[#555] uppercase tracking-[0.2em]">Email Address</label>
                  <input 
                    name="email"
                    type="email" 
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    style={inputStyle}
                    className="focus:border-[#00f0ff] focus:bg-white/10"
                  />
                  {errors.email && <p className="text-red-500 text-[10px] uppercase font-bold tracking-wider mt-1">{errors.email}</p>}
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[#555] uppercase tracking-[0.2em]">Subject</label>
                <input 
                  name="subject"
                  type="text" 
                  placeholder="Project Inquiry"
                  value={form.subject}
                  onChange={handleChange}
                  style={inputStyle}
                  className="focus:border-[#00f0ff] focus:bg-white/10"
                />
                {errors.subject && <p className="text-red-500 text-[10px] uppercase font-bold tracking-wider mt-1">{errors.subject}</p>}
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-[#555] uppercase tracking-[0.2em]">Message</label>
                <textarea 
                  name="message"
                  rows="5"
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={handleChange}
                  style={{ ...inputStyle, resize: 'none' }}
                  className="focus:border-[#00f0ff] focus:bg-white/10"
                />
                {errors.message && <p className="text-red-500 text-[10px] uppercase font-bold tracking-wider mt-1">{errors.message}</p>}
              </div>
              
              <button 
                type="submit"
                disabled={submitting}
                className="w-full group/btn px-10 py-5 bg-[#00f0ff] text-black font-bold rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-4"
                style={{ cursor: submitting ? 'wait' : 'pointer' }}
              >
                {submitting ? 'Sending...' : (
                  <>
                    Send Message
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover/btn:translate-x-2 transition-transform">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </>
                )}
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;

