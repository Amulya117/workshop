import React, { useEffect, useRef } from 'react';

/**
 * MatrixGridCanvas Component
 * Renders an interactive matrix-dot grid on an HTML5 canvas.
 * Features:
 * - Ambient gentle undulating wave
 * - Interactive ripple & perspective distortion following mouse position
 * - Cyber-Emerald (#10b981) and Lime (#a3e635) particle illumination
 * - Device pixel ratio scaling for crystal clear rendering on retina/high-DPI screens
 */
const MatrixGridCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse state with smooth damping
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 180,
      active: false,
    };

    // Grid configuration
    const spacing = 38; // Distance between dots
    let cols = Math.ceil(width / spacing) + 2;
    let rows = Math.ceil(height / spacing) + 2;

    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);

      cols = Math.ceil(width / spacing) + 2;
      rows = Math.ceil(height / spacing) + 2;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.targetX = e.touches[0].clientX - rect.left;
        mouse.targetY = e.touches[0].clientY - rect.top;
        mouse.active = true;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleMouseLeave);

    let frame = 0;

    const render = () => {
      frame += 0.02;

      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      ctx.clearRect(0, 0, width, height);

      // Global subtle perspective shift based on mouse relative to center
      const centerX = width / 2;
      const centerY = height / 2;
      const tiltX = mouse.active ? ((mouse.x - centerX) / centerX) * 8 : 0;
      const tiltY = mouse.active ? ((mouse.y - centerY) / centerY) * 8 : 0;

      // Draw dots
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const originX = (i - 1) * spacing;
          const originY = (j - 1) * spacing;

          // Ambient idle breathing wave
          const ambientWave =
            Math.sin(originX * 0.008 + frame) * Math.cos(originY * 0.008 + frame) * 3;

          // Distance to mouse
          const dx = mouse.x - originX;
          const dy = mouse.y - originY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let posX = originX + tiltX * 0.3;
          let posY = originY + tiltY * 0.3 + ambientWave;
          let dotRadius = 1.2;
          let alpha = 0.18;
          let isNeon = false;

          // Mouse interaction (ripple + repulsion + cyber glow)
          if (mouse.active && dist < mouse.radius) {
            const force = (1 - dist / mouse.radius);
            // Ripple harmonic oscillation
            const ripple = Math.sin(dist * 0.06 - frame * 4) * 8 * force;
            const angle = Math.atan2(dy, dx);

            // Shift position away from mouse (perspective displacement)
            posX -= Math.cos(angle) * (force * 14 + ripple);
            posY -= Math.sin(angle) * (force * 14 + ripple);

            // Enhance size & brightness
            dotRadius = 1.2 + force * 2.2;
            alpha = 0.25 + force * 0.75;
            isNeon = true;
          }

          // Render dot
          ctx.beginPath();
          ctx.arc(posX, posY, Math.max(0.6, dotRadius), 0, Math.PI * 2);

          if (isNeon) {
            // Bright neon emerald to lime transition
            const glowRatio = 1 - dist / mouse.radius;
            if (glowRatio > 0.5) {
              ctx.fillStyle = `rgba(163, 230, 53, ${alpha})`; // Bright lime
              ctx.shadowColor = '#10b981';
              ctx.shadowBlur = 6;
            } else {
              ctx.fillStyle = `rgba(16, 185, 129, ${alpha})`; // Crisp neon emerald
              ctx.shadowColor = '#059669';
              ctx.shadowBlur = 4;
            }
          } else {
            // Idle deep matte carbon-emerald dot
            ctx.fillStyle = `rgba(16, 185, 129, ${alpha})`;
            ctx.shadowBlur = 0;
          }

          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-70"
      style={{ willChange: 'transform' }}
    />
  );
};

export default MatrixGridCanvas;

