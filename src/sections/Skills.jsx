import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const skills = [
  { name: 'React / Next.js', level: 90, cat: 'Frontend' },
  { name: 'JavaScript / TypeScript', level: 85, cat: 'Frontend' },
  { name: 'UI/UX Design (Figma)', level: 88, cat: 'Design' },
  { name: 'Tailwind CSS / SCSS', level: 92, cat: 'Frontend' },
  { name: 'Node.js / Express', level: 75, cat: 'Backend' },
  { name: 'Framer Motion / GSAP', level: 80, cat: 'Animation' },
  { name: 'MongoDB / PostgreSQL', level: 70, cat: 'Backend' },
  { name: 'Three.js / WebGL', level: 65, cat: 'Creative' },
];

const techStack = [
  'React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js',
  'Figma', 'GSAP', 'Three.js', 'MongoDB', 'PostgreSQL',
];

const SkillBar = ({ name, level, cat, i }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
      style={{
        padding: '1.5rem 1.75rem',
        background: 'var(--bg-card)',
        borderRadius: '1rem',
        border: '1px solid var(--border)',
        marginBottom: '0.75rem',
        transition: 'border-color 0.3s ease',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0,240,255,0.15)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
        <div>
          <p style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.25rem', color: 'rgba(255,255,255,0.85)' }}>{name}</p>
          <p style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#00f0ff', opacity: 0.6 }}>{cat}</p>
        </div>
        <span style={{
          fontSize: '0.75rem',
          fontWeight: 700,
          color: '#00f0ff',
          fontFamily: "'Space Grotesk', sans-serif",
        }}>{level}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{ width: inView ? `${level}%` : '0%' }}
        />
      </div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      style={{
        padding: 'clamp(8rem, 15vw, 14rem) clamp(1.5rem, 5vw, 6rem)',
        background: 'var(--bg-primary)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', bottom: '-200px', left: '-100px',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(0,240,255,0.04) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div style={{ marginBottom: 'clamp(4rem, 8vw, 7rem)' }}>
          <motion.p
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-label" style={{ marginBottom: '1.5rem', color: '#00f0ff' }}
          >
            02 — Skills & Expertise
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-huge" style={{ maxWidth: '600px' }}
          >
            My{' '}
            <span style={{ color: '#00f0ff' }}>technical</span>{' '}
            arsenal.
          </motion.h2>
        </div>

        {/* Two Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
          gap: 'clamp(2rem, 6vw, 6rem)',
          alignItems: 'start',
        }}>
          {/* Skill Bars */}
          <div>
            <p style={{
              fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em',
              textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)',
              marginBottom: '2rem',
            }}>Proficiency Levels</p>
            {skills.map((s, i) => (
              <SkillBar key={s.name} {...s} i={i} />
            ))}
          </div>

          {/* Tech Stack Bubbles + Description */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              style={{
                fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
                lineHeight: 1.9,
                color: 'rgba(255,255,255,0.35)',
                marginBottom: '3rem',
              }}
            >
              I'm a passionate web developer with over 3 years of experience
              creating modern, immersive web applications. I specialize in
              frontend development using cutting-edge technologies to deliver
              exceptional user experiences.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{
                fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em',
                textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)',
                marginBottom: '1.5rem',
              }}
            >Tech Stack</motion.p>

            <motion.div
              initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}
            >
              {techStack.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.05 }}
                  style={{
                    padding: '0.5rem 1.25rem',
                    border: '1px solid var(--border)',
                    borderRadius: '100px',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    color: 'rgba(255,255,255,0.5)',
                    background: 'var(--bg-card)',
                    transition: 'all 0.3s ease',
                    cursor: 'none',
                  }}
                  whileHover={{
                    borderColor: '#00f0ff',
                    color: '#00f0ff',
                    background: 'rgba(0,240,255,0.05)',
                    y: -4,
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
