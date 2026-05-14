import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouseCoords = useRef({ x: 0, y: 0 });
  const ringCoords = useRef({ x: 0, y: 0 });
  const animId = useRef(null);
  const isHovering = useRef(false);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const onMouseMove = (e) => {
      mouseCoords.current.x = e.clientX;
      mouseCoords.current.y = e.clientY;
      
      // Update global CSS variables for spotlight effect
      document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
      
      dot.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      
      const target = e.target;
      const interactable = !!target.closest('a, button, input, textarea, [data-hover]');
      const spotlight = !!target.closest('.nav-link-spotlight');
      const reveal = !!target.closest('[data-hover="reveal"]');

      isHovering.current = interactable || reveal;

      if (interactable) {
        ring.classList.add('hover');
      } else {
        ring.classList.remove('hover');
      }

      if (spotlight) {
        ring.classList.add('spotlight');
      } else {
        ring.classList.remove('spotlight');
      }

      if (reveal) {
        ring.classList.add('reveal');
        dot.classList.add('reveal');
      } else {
        ring.classList.remove('reveal');
        dot.classList.remove('reveal');
      }
    };

    const animate = () => {
      const { x, y } = mouseCoords.current;
      const ringSize = ring.classList.contains('reveal') ? 240 : (isHovering.current ? 90 : 36);
      
      ringCoords.current.x += (x - ringCoords.current.x - ringSize / 2) * 0.15;
      ringCoords.current.y += (y - ringCoords.current.y - ringSize / 2) * 0.15;

      
      ring.style.transform = `translate(${ringCoords.current.x}px, ${ringCoords.current.y}px)`;
      animId.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove);
    animId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animId.current);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" style={{ pointerEvents: 'none' }} />
      <div ref={ringRef} className="cursor-ring" style={{ pointerEvents: 'none' }} />
    </>
  );
};

export default CustomCursor;


