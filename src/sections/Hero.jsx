import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';

const roles = ['UI/UX Designer', 'Creative Developer', 'Motion Designer', 'Brand Strategist'];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (!isDeleting && displayText.length < current.length) {
      timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), 80);
    } else if (!isDeleting && displayText.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length - 1)), 40);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  // Parallax mouse
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

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(7rem, 15vh, 12rem) clamp(1.5rem, 5vw, 6rem) clamp(4rem, 8vh, 8rem)',
      }}
    >
      {/* Ambient background blobs */}
      <motion.div
        style={{
          position: 'absolute', top: '20%', left: '60%',
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(0, 240, 255, 0.06) 0%, transparent 70%)',
          borderRadius: '50%', pointerEvents: 'none',
          x: blob1X, y: blob1Y,
        }}
      />
      <motion.div
        style={{
          position: 'absolute', bottom: '10%', left: '10%',
          width: '500px', height: '500px',
          background: 'radial-gradient(circle, rgba(155, 93, 229, 0.06) 0%, transparent 70%)',
          borderRadius: '50%', pointerEvents: 'none',
          x: blob2X, y: blob2Y,
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ position: 'relative', zIndex: 1, maxWidth: '1400px' }}
      >
        {/* Status Badge */}
        <motion.div variants={itemVariants} style={{ marginBottom: '2.5rem' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
            padding: '0.45rem 1.25rem',
            border: '1px solid rgba(0, 240, 255, 0.2)',
            borderRadius: '100px',
            fontSize: '0.7rem',
            fontWeight: 600,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: '#00f0ff',
            background: 'rgba(0, 240, 255, 0.04)',
          }}>
            <span style={{
              width: '6px', height: '6px', borderRadius: '50%',
              background: '#00f0ff',
              boxShadow: '0 0 8px #00f0ff',
              animation: 'blink 2s ease-in-out infinite',
            }} />
            Available for new opportunities
          </span>
        </motion.div>

        {/* Giant Name */}
        <motion.div variants={itemVariants} style={{ overflow: 'hidden' }}>
          <h1 className="text-giant" style={{
            marginBottom: '0.5rem',
            lineHeight: 0.85,
          }}>
            <span style={{ color: 'rgba(255,255,255,0.15)', display: 'block', marginBottom: '0.2em' }}>
              Hey👋, I'm
            </span>
            <span style={{
              display: 'block',
              background: 'linear-gradient(135deg, #ffffff 30%, rgba(255,255,255,0.6) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Aryan.
            </span>
          </h1>
        </motion.div>

        {/* Typewriter Role */}
        <motion.div variants={itemVariants} style={{ marginBottom: '3rem', marginTop: '1.5rem' }}>
          <p style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(1.25rem, 3vw, 2rem)',
            fontWeight: 400,
            color: 'rgba(255,255,255,0.5)',
            letterSpacing: '-0.01em',
          }}>
            I'm a{' '}
            <span style={{ color: '#00f0ff', fontWeight: 600 }}>
              {displayText}
              <span className="cursor-blink" style={{ color: '#00f0ff' }}>|</span>
            </span>
          </p>
        </motion.div>

        {/* Bio */}
        <motion.p variants={itemVariants} style={{
          maxWidth: '540px',
          fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
          lineHeight: 1.8,
          color: 'rgba(255,255,255,0.35)',
          marginBottom: '3.5rem',
        }}>
          I create beautiful, responsive web experiences using modern technologies.
          Passionate about clean code, immersive animations, and user-centered design.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', marginBottom: '5rem' }}>
          <a href="#projects" className="btn-primary">
            View My Work
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#" download className="btn-outline">
            Download CV
          </a>
        </motion.div>

        {/* Stats Row */}
        <motion.div variants={itemVariants}>
          <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
            {[
              { number: '3+', label: 'Years Experience' },
              { number: '20+', label: 'Projects Done' },
              { number: '10+', label: 'Happy Clients' },
            ].map((stat) => (
              <div key={stat.label}>
                <p style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                  fontWeight: 800,
                  color: '#00f0ff',
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                  marginBottom: '0.4rem',
                }}>{stat.number}</p>
                <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{
          position: 'absolute',
          right: 'clamp(1.5rem, 5vw, 6rem)',
          bottom: '3rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <span style={{
          fontSize: '0.6rem',
          fontWeight: 700,
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.2)',
          writingMode: 'vertical-rl',
        }}>Scroll</span>
        <motion.div
          animate={{ scaleY: [0, 1, 0], originY: 0 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          style={{
            width: '1px',
            height: '80px',
            background: 'linear-gradient(to bottom, #00f0ff, transparent)',
          }}
        />
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: 'absolute',
          left: 'clamp(1.5rem, 5vw, 6rem)',
          bottom: '3rem',
          display: 'flex',
          gap: '2rem',
        }}
      >
        {['/ Twitter (X)', '/ LinkedIn', '/ GitHub'].map((link) => (
          <a
            key={link}
            href="#"
            style={{
              fontSize: '0.7rem',
              fontWeight: 500,
              letterSpacing: '0.05em',
              color: 'rgba(255,255,255,0.2)',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
              cursor: 'none',
            }}
            onMouseEnter={e => e.target.style.color = '#00f0ff'}
            onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.2)'}
          >
            {link}
          </a>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
