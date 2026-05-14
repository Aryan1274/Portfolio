import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isSpotlight, setIsSpotlight] = useState(false);
  
  const mouseCoords = useRef({ x: 0, y: 0 });
  const ringCoords = useRef({ x: 0, y: 0 });
  const animId = useRef(null);

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
      
      dot.style.transform = `translate(${mouseCoords.current.x - 4}px, ${mouseCoords.current.y - 4}px)`;
      
      const target = e.target;
      const isInteractable = !!target.closest('a, button, input, textarea, [data-hover]');
      const isSpotlightTarget = !!target.closest('.nav-link-spotlight');

      if (isInteractable !== isHovering) {
        setIsHovering(isInteractable);
      }
      if (isSpotlightTarget !== isSpotlight) {
        setIsSpotlight(isSpotlightTarget);
      }
    };

    const animate = () => {
      const { x, y } = mouseCoords.current;
      const size = isHovering ? 90 : 36;
      
      ringCoords.current.x += (x - ringCoords.current.x - size / 2) * 0.15;
      ringCoords.current.y += (y - ringCoords.current.y - size / 2) * 0.15;
      
      ring.style.transform = `translate(${ringCoords.current.x}px, ${ringCoords.current.y}px)`;
      animId.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove);
    animId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animId.current);
    };
  }, [isHovering, isSpotlight]);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className={`cursor-ring ${isHovering ? 'hover' : ''} ${isSpotlight ? 'spotlight' : ''}`} />
    </>
  );
};

export default CustomCursor;

