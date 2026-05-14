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

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [menuOpen]);

  return (
    <>
      {/* Top Bar */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 500,
          padding: '1.25rem clamp(1.5rem, 5vw, 6rem)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          backdropFilter: (scrolled || menuOpen) ? 'blur(20px)' : 'none',
          borderBottom: (scrolled || menuOpen) ? '1px solid rgba(255,255,255,0.04)' : 'none',
          background: (scrolled || menuOpen) ? 'rgba(3,3,3,0.8)' : 'transparent',
          transition: 'all 0.4s ease',
        }}
      >
        <a href="#home" onClick={() => setMenuOpen(false)} style={{ textDecoration: 'none', cursor: 'none' }}>
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 800, fontSize: '1.1rem', letterSpacing: '0.15em',
            textTransform: 'uppercase',
            background: 'linear-gradient(135deg, #00f0ff, #9b5de5)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            Aryan
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-only" style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link-spotlight"
              data-text={link.label}
              style={{
                color: 'rgba(255,255,255,0.4)', textDecoration: 'none',
                fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.12em',
                textTransform: 'uppercase', transition: 'color 0.3s ease', cursor: 'none',
              }}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-hire" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.6rem 1.5rem', border: '1px solid rgba(0, 240, 255, 0.3)',
              borderRadius: '100px', color: '#00f0ff', textDecoration: 'none',
              fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em',
              textTransform: 'uppercase', transition: 'all 0.3s ease', cursor: 'none',
            }}>
            Hire Me
          </a>
        </nav>

        {/* Hamburger */}
        <button className="mobile-only hamburger" onClick={() => setMenuOpen(!menuOpen)} style={{ background: 'none', border: 'none', padding: '0.5rem', display: 'flex', flexDirection: 'column', gap: '6px', zIndex: 501, cursor: 'none' }}>
          <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }} style={{ width: '24px', height: '2px', background: '#fff', borderRadius: '2px' }} />
          <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} style={{ width: '24px', height: '2px', background: '#fff', borderRadius: '2px' }} />
          <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }} style={{ width: '24px', height: '2px', background: '#fff', borderRadius: '2px' }} />
        </button>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 499,
              background: 'rgba(3,3,3,0.98)',
              backdropFilter: 'blur(15px)',
              display: 'flex', flexDirection: 'column',
              padding: '8rem 2rem 4rem',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="nav-link-spotlight mobile-nav-item"
                  data-text={link.label}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  style={{
                    fontSize: '2.5rem', fontWeight: 800, color: '#fff',
                    textDecoration: 'none', fontFamily: "'Space Grotesk', sans-serif",
                    letterSpacing: '-0.02em', position: 'relative'
                  }}
                >
                  <span style={{ color: 'rgba(255,255,255,0.1)', marginRight: '1rem' }}>0{i+1}</span>
                  {link.label}
                </motion.a>
              ))}
            </div>
            
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} style={{ marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem' }}>
              <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>Get in touch</p>
              <a href="mailto:hello@aryan.dev" style={{ fontSize: '1.2rem', color: '#00f0ff', textDecoration: 'none', fontWeight: 600 }}>hello@aryan.dev</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
