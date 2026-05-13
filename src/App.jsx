import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import Background from './components/Background';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Blog from './sections/Blog';
import Contact from './sections/Contact';
import './App.css';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-purple-500/30">
      <CustomCursor />
      <Background />
      <Navbar />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500 z-[100] origin-left"
        style={{ scaleX }}
      />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Blog />
        <Contact />
      </main>

      <footer style={{ padding: '5rem 0 3rem', background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
        {/* Top glow line */}
        <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(0,240,255,0.3), transparent)' }} />

        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(1.5rem,5vw,6rem)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '2rem' }}>
          {/* Logo */}
          <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 800, fontSize: '1.4rem', letterSpacing: '0.12em', textTransform: 'uppercase', background: 'linear-gradient(135deg,#00f0ff,#9b5de5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Aryan</span>

          <p style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.85rem', lineHeight: 1.7, maxWidth: '380px' }}>
            Built with React, Vite &amp; Framer Motion.
            Crafted for the next generation of the web.
          </p>

          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {['GitHub','LinkedIn','Twitter','Dribbble'].map(link => (
              <a key={link} href="#" style={{ color: 'rgba(255,255,255,0.25)', fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.08em', textDecoration: 'none', transition: 'color 0.3s ease', cursor: 'none' }}
                onMouseEnter={e => e.target.style.color = '#00f0ff'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.25)'}>
                {link}
              </a>
            ))}
          </div>

          <p style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.12)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
            &copy; 2026 Aryan. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
