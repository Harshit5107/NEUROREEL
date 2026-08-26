import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  z: number;
  radius: number;
  baseAlpha: number;
  alpha: number;
  vx: number;
  vy: number;
  color: string;
  pulseSpeed: number;
}

export const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    const particleCount = Math.min(Math.floor(width / 12), 120);
    const particles: Particle[] = [];

    const colors = ['#00F0FF', '#0070F3', '#00F5FF', '#38BDF8', '#7928CA'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 2 + 0.5,
        radius: Math.random() * 2.2 + 0.8,
        baseAlpha: Math.random() * 0.6 + 0.2,
        alpha: Math.random() * 0.6 + 0.2,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulseSpeed: Math.random() * 0.03 + 0.01,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.02;
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Radial Volumetric Light Backdrop
      const bgGlow = ctx.createRadialGradient(
        width * 0.65 + (mouseX - width / 2) * 0.08,
        height * 0.4 + (mouseY - height / 2) * 0.08,
        50,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.85
      );
      bgGlow.addColorStop(0, 'rgba(0, 112, 243, 0.12)');
      bgGlow.addColorStop(0.35, 'rgba(0, 240, 255, 0.04)');
      bgGlow.addColorStop(1, 'rgba(2, 4, 10, 1)');

      ctx.fillStyle = bgGlow;
      ctx.fillRect(0, 0, width, height);

      // Draw faint cybernetic grid
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.025)';
      ctx.lineWidth = 1;
      const gridSize = 80;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update & Draw Particles with Connections
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx + (mouseX - width / 2) * 0.0001 * p.z;
        p.y += p.vy + (mouseY - height / 2) * 0.0001 * p.z;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        p.alpha = p.baseAlpha + Math.sin(time + i) * 0.2;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * p.z, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.1, Math.min(1, p.alpha));
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 10;
        ctx.fill();

        // Connect nearby particles with glowing neural lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const lineAlpha = (1 - dist / 130) * 0.15;
            ctx.strokeStyle = '#00F0FF';
            ctx.globalAlpha = lineAlpha;
            ctx.shadowBlur = 0;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};
