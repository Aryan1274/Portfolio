import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import heroImg from '../assets/my-img2crop.jpg';
import revealImg from '../assets/ayanakoji2.jpeg';

const roles = ['Full Stack Developer', 'UI Designer', 'Programmer', 'Vibe Coder'];
const greetingWords = ["Hey\u{1F44B},", "I'm"];
const nameLetters = "Aryan .".split("");

const wordVariants = {
  hidden: { opacity: 0, y: 60, skewY: 4 },
  visible: (i) => ({
    opacity: 1, y: 0, skewY: 0,
    transition: { duration: 0.75, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] },
  }),
};

const letterVariants = {
  hidden: { opacity: 0, y: 80 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: 0.42 + i * 0.055, ease: [0.22, 1, 0.36, 1] },
  }),
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (!isDeleting && displayText.length < current.length)
      timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), 80);
    else if (!isDeleting && displayText.length === current.length)
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    else if (isDeleting && displayText.length > 0)
      timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length - 1)), 40);
    else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  useEffect(() => {
    const onMove = (e) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 40);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 40);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const blob1X = useTransform(mouseX, v => v * 0.5);
  const blob1Y = useTransform(mouseY, v => v * 0.5);
  const blob2X = useTransform(mouseX, v => v * -0.3);
  const blob2Y = useTransform(mouseY, v => v * -0.3);
  const imgParX = useTransform(mouseX, v => v * 0.12);
  const imgParY = useTransform(mouseY, v => v * 0.12);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } }
  };

  return (
    <section id="home" className="hero-section">
      {/* Ambient blobs */}
      <motion.div className="ambient-blob blob-1" style={{ x: blob1X, y: blob1Y }} />
      <motion.div className="ambient-blob blob-2" style={{ x: blob2X, y: blob2Y }} />

      <div className="section-inner hero-inner">
        <div className="hero-grid">
          {/* LEFT COLUMN */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="hero-content">

            {/* Status Badge */}
            <motion.div variants={itemVariants} style={{ marginBottom: '2rem' }}>
              <span className="status-badge">
                <span className="status-dot" />
                Available for new opportunities
              </span>
            </motion.div>

            {/* Greeting */}
            <div style={{ marginBottom: '0.15rem', overflow: 'visible' }}>
              <div className="greeting-text">
                {greetingWords.map((word, i) => (
                  <motion.span key={word} custom={i} variants={wordVariants} initial="hidden" animate="visible" style={{ display: 'inline-block' }}>
                    {word}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Name */}
            <div style={{ overflow: 'visible', paddingBottom: '0.2em', marginBottom: '1.5rem' }}>
              <div className="name-text">
                {nameLetters.map((letter, i) => (
                  <motion.span key={i} custom={i} variants={letterVariants} initial="hidden" animate="visible"
                    style={{ display: 'inline-block', willChange: 'transform', background: 'linear-gradient(135deg,#ffffff 30%,rgba(255,255,255,0.55) 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Typewriter role */}
            <motion.div variants={itemVariants} style={{ marginBottom: '2rem' }}>
              <p className="role-text">
                I'm a{' '}
                <span className="accent-text">
                  {displayText}<span className="cursor-blink">|</span>
                </span>
              </p>
            </motion.div>

            {/* Bio */}
            <motion.p variants={itemVariants} className="bio-text">
              I am a passionate and self-motivated MCA AI/ML student at Rayat Bahra University.
              Currently working at The Clyou as a Web Developer and Content Creator.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="hero-ctas">
              <a href="#projects" className="btn-primary">
                View My Work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <a href="#contact" className="btn-outline">Hire Me</a>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="hero-stats">
              {[{ number: '1 Year', label: 'Experience' }, { number: '5+', label: 'Projects Done' }, { number: '10+', label: 'Happy Clients' }].map((stat) => (
                <div key={stat.label} className="stat-item">
                  <p className="stat-number">{stat.number}</p>
                  <p className="stat-label">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN — Face Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="hero-image-container"
          >
            {/* Spinning glow ring */}
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} className="ring ring-glow" />
            {/* Dashed orbit */}
            <motion.div animate={{ rotate: -360 }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }} className="ring ring-dashed" />

            {/* Floating + parallax image wrapper */}
            <motion.div style={{ x: imgParX, y: imgParY, position: 'relative', zIndex: 1 }} animate={{ y: [0, -18, 0] }} transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}>
              {/* Blob-shaped frame */}
              <div 
                className="image-frame glass"
                data-hover="reveal"
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left;
                  const y = e.clientY - rect.top;
                  e.currentTarget.style.setProperty('--mx', `${x}px`);
                  e.currentTarget.style.setProperty('--my', `${y}px`);
                }}
              >
                <img src={heroImg} alt="Aryan Verma" className="hero-img" />
                <img src={revealImg} alt="Reveal" className="hero-img-reveal" />
                <div className="image-overlay" />
              </div>

              {/* Floating accent dots */}
              <motion.div animate={{ y: [0, -10, 0], x: [0, 5, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }} className="accent-dot dot-cyan" />
              <motion.div animate={{ y: [0, 12, 0], x: [0, -8, 0] }} transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }} className="accent-dot dot-purple" />
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }} className="accent-dot dot-green" />

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1, y: [0, -5, 0] }}
                transition={{ opacity: { delay: 1.2, duration: 0.5 }, scale: { delay: 1.2, duration: 0.5 }, y: { duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 } }}
                className="status-badge-floating glass"
              >
                <span className="badge-icon">✨</span>
                <div>
                  <p className="badge-title">Open to Work</p>
                  <p className="badge-sub">Full-time / Freelance</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - hidden on small mobile */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="scroll-indicator desktop-only">
        <span className="scroll-text">Scroll</span>
        <motion.div animate={{ scaleY: [0, 1, 0], originY: 0 }} transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }} className="scroll-line" />
      </motion.div>

      {/* Social links - hidden on small mobile */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="social-links-hero desktop-only">
        {[
          { label: '/ GitHub', url: 'https://github.com/Aryan1274' },
          { label: '/ LinkedIn', url: 'https://www.linkedin.com/in/aryan-verma-2b9a92279' },
          { label: '/ Twitter', url: '#' }
        ].map((link) => (
          <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="social-link-item">{link.label}</a>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
