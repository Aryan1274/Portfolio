import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import heroImg from '../assets/hero.png';

const roles = ['UI/UX Designer', 'Creative Developer', 'Motion Designer', 'Brand Strategist'];
const greetingWords = ["Hey\u{1F44B},", "I'm"];
const nameLetters = "Aryan.".split("");

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
    <section id="home" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', position: 'relative', overflow: 'hidden',
      padding: 'clamp(7rem,15vh,12rem) clamp(1.5rem,5vw,6rem) clamp(4rem,8vh,8rem)',
    }}>
      {/* Ambient blobs */}
      <motion.div style={{ position:'absolute', top:'20%', left:'55%', width:'600px', height:'600px', background:'radial-gradient(circle,rgba(0,240,255,0.07) 0%,transparent 70%)', borderRadius:'50%', pointerEvents:'none', x:blob1X, y:blob1Y }} />
      <motion.div style={{ position:'absolute', bottom:'10%', left:'10%', width:'500px', height:'500px', background:'radial-gradient(circle,rgba(155,93,229,0.07) 0%,transparent 70%)', borderRadius:'50%', pointerEvents:'none', x:blob2X, y:blob2Y }} />

      {/* Two-column layout */}
      <div style={{ position:'relative', zIndex:1, maxWidth:'1400px', display:'flex', alignItems:'center', justifyContent:'space-between', gap:'clamp(2rem,5vw,5rem)', width:'100%' }}>

        {/* LEFT COLUMN */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" style={{ flex:'1 1 auto', minWidth:0 }}>

          {/* Status Badge */}
          <motion.div variants={itemVariants} style={{ marginBottom:'2.5rem' }}>
            <span style={{ display:'inline-flex', alignItems:'center', gap:'0.6rem', padding:'0.45rem 1.25rem', border:'1px solid rgba(0,240,255,0.2)', borderRadius:'100px', fontSize:'0.7rem', fontWeight:600, letterSpacing:'0.15em', textTransform:'uppercase', color:'#00f0ff', background:'rgba(0,240,255,0.04)' }}>
              <span style={{ width:'6px', height:'6px', borderRadius:'50%', background:'#00f0ff', boxShadow:'0 0 8px #00f0ff', animation:'blink 2s ease-in-out infinite' }} />
              Available for new opportunities
            </span>
          </motion.div>

          {/* "Hey👋, I'm" — word-level animated */}
          <div style={{ marginBottom:'0.15rem', overflow:'visible' }}>
            <div style={{ display:'flex', flexWrap:'wrap', gap:'0 0.45em', fontFamily:"'Space Grotesk',sans-serif", fontSize:'var(--text-giant)', fontWeight:900, lineHeight:1, letterSpacing:'-0.04em', color:'rgba(255,255,255,0.18)' }}>
              {greetingWords.map((word, i) => (
                <motion.span key={word} custom={i} variants={wordVariants} initial="hidden" animate="visible" style={{ display:'inline-block', willChange:'transform' }}>
                  {word}
                </motion.span>
              ))}
            </div>
          </div>

          {/* "Aryan." — letter-level animated, paddingBottom fixes Y clip */}
          <div style={{ overflow:'visible', paddingBottom:'0.2em', marginBottom:'1.5rem' }}>
            <div style={{ display:'flex', flexWrap:'wrap', fontFamily:"'Space Grotesk',sans-serif", fontSize:'var(--text-giant)', fontWeight:900, lineHeight:1, letterSpacing:'-0.04em' }}>
              {nameLetters.map((letter, i) => (
                <motion.span key={i} custom={i} variants={letterVariants} initial="hidden" animate="visible"
                  style={{ display:'inline-block', willChange:'transform', background:'linear-gradient(135deg,#ffffff 30%,rgba(255,255,255,0.55) 100%)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Typewriter role */}
          <motion.div variants={itemVariants} style={{ marginBottom:'3rem' }}>
            <p style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:'clamp(1.25rem,3vw,2rem)', fontWeight:400, color:'rgba(255,255,255,0.5)', letterSpacing:'-0.01em' }}>
              I'm a{' '}
              <span style={{ color:'#00f0ff', fontWeight:600 }}>
                {displayText}<span className="cursor-blink" style={{ color:'#00f0ff' }}>|</span>
              </span>
            </p>
          </motion.div>

          {/* Bio */}
          <motion.p variants={itemVariants} style={{ maxWidth:'520px', fontSize:'clamp(0.875rem,1.5vw,1rem)', lineHeight:1.85, color:'rgba(255,255,255,0.35)', marginBottom:'3rem' }}>
            I create beautiful, responsive web experiences using modern technologies.
            Passionate about clean code, immersive animations, and user-centered design.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} style={{ display:'flex', gap:'1.25rem', flexWrap:'wrap', marginBottom:'4.5rem' }}>
            <a href="#projects" className="btn-primary">
              View My Work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#" download className="btn-outline">Download CV</a>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants}>
            <div style={{ display:'flex', gap:'3rem', flexWrap:'wrap' }}>
              {[{ number:'3+', label:'Years Experience' }, { number:'20+', label:'Projects Done' }, { number:'10+', label:'Happy Clients' }].map((stat) => (
                <div key={stat.label}>
                  <p style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:'clamp(1.5rem,3vw,2.25rem)', fontWeight:800, color:'#00f0ff', letterSpacing:'-0.03em', lineHeight:1, marginBottom:'0.4rem' }}>{stat.number}</p>
                  <p style={{ fontSize:'0.7rem', color:'rgba(255,255,255,0.3)', letterSpacing:'0.12em', textTransform:'uppercase' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN — Face Image */}
        <motion.div
          initial={{ opacity:0, x:80, scale:0.9 }}
          animate={{ opacity:1, x:0, scale:1 }}
          transition={{ duration:1.1, delay:0.5, ease:[0.22,1,0.36,1] }}
          style={{ flex:'0 0 auto', position:'relative', display:'flex', alignItems:'center', justifyContent:'center' }}
        >
          {/* Spinning glow ring */}
          <motion.div animate={{ rotate:360 }} transition={{ duration:20, repeat:Infinity, ease:'linear' }} style={{ position:'absolute', width:'clamp(280px,28vw,420px)', height:'clamp(280px,28vw,420px)', borderRadius:'50%', background:'conic-gradient(from 0deg,#00f0ff22,#9b5de522,#00f0ff22,transparent)', zIndex:0 }} />
          {/* Dashed orbit */}
          <motion.div animate={{ rotate:-360 }} transition={{ duration:30, repeat:Infinity, ease:'linear' }} style={{ position:'absolute', width:'clamp(320px,32vw,470px)', height:'clamp(320px,32vw,470px)', borderRadius:'50%', border:'1px dashed rgba(0,240,255,0.15)', zIndex:0 }} />

          {/* Floating + parallax image wrapper */}
          <motion.div style={{ x:imgParX, y:imgParY, position:'relative', zIndex:1 }} animate={{ y:[0,-18,0] }} transition={{ duration:4.5, repeat:Infinity, ease:'easeInOut' }}>
            {/* Blob-shaped frame */}
            <div style={{ position:'relative', width:'clamp(240px,24vw,370px)', height:'clamp(240px,24vw,370px)', borderRadius:'38% 62% 54% 46% / 44% 36% 64% 56%', background:'linear-gradient(135deg,rgba(0,240,255,0.1),rgba(155,93,229,0.1))', border:'1px solid rgba(0,240,255,0.22)', backdropFilter:'blur(12px)', overflow:'hidden', boxShadow:'0 0 60px rgba(0,240,255,0.12),0 0 120px rgba(155,93,229,0.08),inset 0 1px 1px rgba(255,255,255,0.08)' }}>
              <img src={heroImg} alt="Aryan" style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'center top', filter:'brightness(0.95) contrast(1.05) saturate(1.15)', mixBlendMode:'lighten' }} />
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg,transparent 50%,rgba(3,3,3,0.6) 100%)', pointerEvents:'none' }} />
            </div>

            {/* Floating accent dots */}
            <motion.div animate={{ y:[0,-10,0], x:[0,5,0] }} transition={{ duration:3, repeat:Infinity, ease:'easeInOut', delay:0.5 }} style={{ position:'absolute', top:'-12px', right:'20px', width:'14px', height:'14px', borderRadius:'50%', background:'#00f0ff', boxShadow:'0 0 20px #00f0ff' }} />
            <motion.div animate={{ y:[0,12,0], x:[0,-8,0] }} transition={{ duration:3.8, repeat:Infinity, ease:'easeInOut', delay:1 }} style={{ position:'absolute', bottom:'10px', left:'-15px', width:'10px', height:'10px', borderRadius:'50%', background:'#9b5de5', boxShadow:'0 0 20px #9b5de5' }} />
            <motion.div animate={{ y:[0,-8,0] }} transition={{ duration:2.8, repeat:Infinity, ease:'easeInOut', delay:0.2 }} style={{ position:'absolute', top:'30%', right:'-20px', width:'8px', height:'8px', borderRadius:'50%', background:'#00ff87', boxShadow:'0 0 16px #00ff87' }} />

            {/* Floating badge */}
            <motion.div
              initial={{ opacity:0, scale:0.7 }}
              animate={{ opacity:1, scale:1, y:[0,-5,0] }}
              transition={{ opacity:{ delay:1.2, duration:0.5 }, scale:{ delay:1.2, duration:0.5 }, y:{ duration:3.5, repeat:Infinity, ease:'easeInOut', delay:1.5 } }}
              style={{ position:'absolute', bottom:'-22px', right:'-10px', background:'rgba(14,14,14,0.9)', border:'1px solid rgba(0,240,255,0.25)', borderRadius:'14px', padding:'0.7rem 1.1rem', backdropFilter:'blur(16px)', zIndex:2, display:'flex', alignItems:'center', gap:'0.55rem', boxShadow:'0 20px 40px rgba(0,0,0,0.4)' }}
            >
              <span style={{ fontSize:'1.1rem' }}>✨</span>
              <div>
                <p style={{ fontSize:'0.65rem', fontWeight:700, color:'#00f0ff', letterSpacing:'0.1em', textTransform:'uppercase' }}>Open to Work</p>
                <p style={{ fontSize:'0.6rem', color:'rgba(255,255,255,0.4)' }}>Full-time / Freelance</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:2 }} style={{ position:'absolute', right:'clamp(1.5rem,5vw,6rem)', bottom:'3rem', display:'flex', flexDirection:'column', alignItems:'center', gap:'1rem' }}>
        <span style={{ fontSize:'0.6rem', fontWeight:700, letterSpacing:'0.35em', textTransform:'uppercase', color:'rgba(255,255,255,0.2)', writingMode:'vertical-rl' }}>Scroll</span>
        <motion.div animate={{ scaleY:[0,1,0], originY:0 }} transition={{ repeat:Infinity, duration:1.5, ease:'easeInOut' }} style={{ width:'1px', height:'80px', background:'linear-gradient(to bottom,#00f0ff,transparent)' }} />
      </motion.div>

      {/* Social links */}
      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.5 }} style={{ position:'absolute', left:'clamp(1.5rem,5vw,6rem)', bottom:'3rem', display:'flex', gap:'2rem' }}>
        {['/ Twitter (X)', '/ LinkedIn', '/ GitHub'].map((link) => (
          <a key={link} href="#" style={{ fontSize:'0.7rem', fontWeight:500, letterSpacing:'0.05em', color:'rgba(255,255,255,0.2)', textDecoration:'none', transition:'color 0.3s ease', cursor:'none' }}
            onMouseEnter={e => e.target.style.color = '#00f0ff'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.2)'}>
            {link}
          </a>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
