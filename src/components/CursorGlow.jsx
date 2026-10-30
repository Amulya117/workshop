import React, { useEffect, useState, useRef } from 'react';

/**
 * CursorGlow Component (Easter Egg)
 * Smooth trailing light spark & cyber halo that tracks mouse position across the screen.
 * Automatically disabled on touch devices to ensure optimal performance.
 */
const CursorGlow = () => {
  const [visible, setVisible] = useState(false);
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Only enable for devices with a fine pointer (mouse)
    if (!window.matchMedia('(pointer: fine)').matches) return;

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let animationFrameId;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    const animate = () => {
      // Smooth lerp damping for trailing ring
      currentX += (targetX - currentX) * 0.18;
      currentY += (targetY - currentY) * 0.18;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX - 4}px, ${targetY - 4}px, 0)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${currentX - 20}px, ${currentY - 20}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, [visible]);

  return (
    <>
      {/* Outer Trailing Glowing Ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 z-50 w-10 h-10 rounded-full border border-emerald-400/30 bg-emerald-500/5 backdrop-blur-[1px] shadow-[0_0_20px_rgba(16,185,129,0.35)] transition-opacity duration-300 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ willChange: 'transform' }}
      />

      {/* Inner Crisp Neon Spark */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 z-50 w-2 h-2 rounded-full bg-lime-400 shadow-[0_0_10px_#a3e635,0_0_4px_#10b981] transition-opacity duration-200 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ willChange: 'transform' }}
      />
    </>
  );
};

export default CursorGlow;

