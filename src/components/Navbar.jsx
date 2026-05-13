import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
          padding: '1.5rem clamp(1.5rem, 5vw, 6rem)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.04)' : 'none',
          background: scrolled ? 'rgba(3,3,3,0.8)' : 'transparent',
          transition: 'all 0.4s ease',
        }}
      >
        {/* Logo */}
        <a href="#home" style={{ textDecoration: 'none', cursor: 'none' }}>
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800,
            fontSize: '1.1rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            background: 'linear-gradient(135deg, #00f0ff, #9b5de5)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Aryan
          </span>
        </a>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                color: 'rgba(255,255,255,0.4)',
                textDecoration: 'none',
                fontSize: '0.75rem',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                transition: 'color 0.3s ease',
                cursor: 'none',
              }}
              onMouseEnter={e => e.target.style.color = '#00f0ff'}
              onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.4)'}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.6rem 1.5rem',
              border: '1px solid rgba(0, 240, 255, 0.3)',
              borderRadius: '100px',
              color: '#00f0ff',
              textDecoration: 'none',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              transition: 'all 0.3s ease',
              cursor: 'none',
            }}
            onMouseEnter={e => { e.target.style.background = '#00f0ff'; e.target.style.color = '#000'; }}
            onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#00f0ff'; }}
          >
            Hire Me
          </a>
        </nav>
      </motion.header>

      {/* Side Nav Dots */}
      <SideNavDots />
    </>
  );
};

const SideNavDots = () => {
  const [active, setActive] = useState('home');
  const sections = ['home', 'about', 'skills', 'projects', 'blog', 'contact'];

  useEffect(() => {
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.5 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(obs => obs?.disconnect());
  }, []);

  return (
    <div className="side-nav" style={{ display: 'none' }}>
      {sections.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className={`side-nav-dot ${active === id ? 'active' : ''}`}
          title={id}
          style={{ cursor: 'none' }}
        />
      ))}
    </div>
  );
};

export default Navbar;
