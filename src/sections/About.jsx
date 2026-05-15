import React from 'react';
import { motion } from 'framer-motion';
import resumeFile from '../assets/Aryan-resume.pdf';

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }
  })
};

const stats = [
  { label: 'Degree', value: 'MCA AI/ML (RBU)', sub: '2025 – 2027' },
  { label: 'BCA', value: 'GGNIMT', sub: '2022 – 2025' },
  { label: 'Location', value: 'Punjab, India', sub: 'Remote-friendly' },
];

const About = () => {
  return (
    <section
      id="about"
      style={{
        padding: 'clamp(8rem, 15vw, 14rem) clamp(1.5rem, 5vw, 6rem)',
        position: 'relative',
        background: 'var(--bg-secondary)',
        overflow: 'hidden',
      }}
    >
      {/* Subtle glow */}
      <div style={{
        position: 'absolute', top: '-200px', right: '-200px',
        width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(155,93,229,0.06) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Section Label */}
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="text-label"
          style={{ marginBottom: '1.5rem', color: '#00f0ff' }}
        >
          01 — About Me
        </motion.p>

        {/* Grid Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
          gap: 'clamp(3rem, 8vw, 8rem)',
          alignItems: 'start',
        }}>
          {/* Left: Big Heading */}
          <div>
            <motion.h2
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-huge"
              style={{ marginBottom: '2.5rem', color: 'rgba(255,255,255,0.9)' }}
            >
              Passionate about{' '}
              <span style={{ color: '#00f0ff' }}>crafting</span>{' '}
              digital experiences.
            </motion.h2>

            {/* Divider */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
              className="divider"
              style={{ marginBottom: '2.5rem' }}
            />

            {/* Stats Grid */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '2rem',
              }}
            >
              {stats.map((s) => (
                <div key={s.label} style={{
                  padding: '1.5rem',
                  background: 'var(--bg-card)',
                  borderRadius: '1rem',
                  border: '1px solid var(--border)',
                }}>
                  <p className="text-label" style={{ marginBottom: '0.6rem' }}>{s.label}</p>
                  <p style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.3rem', color: 'rgba(255,255,255,0.85)' }}>{s.value}</p>
                  <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>{s.sub}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Bio Text */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
          >
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              lineHeight: 1.9,
              color: 'rgba(255,255,255,0.4)',
              marginBottom: '2.5rem',
            }}>
              Hi, I'm Aryan Verma — a passionate and self-motivated MCA AI/ML student at Rayat Bahra University. I combine technical precision with design sensibility to create digital experiences that stand out.
            </p>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              lineHeight: 1.9,
              color: 'rgba(255,255,255,0.4)',
              marginBottom: '3rem',
            }}>
              Currently working as a Web Developer and Content Creator at The Clyou, I've built a strong foundation in full-stack development. My journey began during my BCA at GGNIMT, where I started practicing and mastering the art of building scalable web applications.
            </p>

            <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap' }}>
              <a href="#projects" className="btn-primary">
                See My Work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="#contact" className="btn-outline">Get In Touch</a>
              <a 
                href={resumeFile}
                download="Aryan-resume.pdf"
                className="btn-outline"
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                Download CV
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
