import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const NeuralHead3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position values for smooth parallax tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for buttery-smooth movement
  const springConfig = { damping: 25, stiffness: 120 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [14, -14]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-18, 18]), springConfig);
  const translateZ = useSpring(useTransform(mouseX, [-0.5, 0.5], [20, 50]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - (rect.left + rect.width / 2)) / rect.width;
      const y = (e.clientY - (rect.top + rect.height / 2)) / rect.height;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
      }}
      className="relative w-full max-w-[540px] aspect-square mx-auto flex items-center justify-center perspective-[1200px]"
    >
      {/* Background Volumetric Glow Halo */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 via-cyan-500/20 to-transparent rounded-full blur-[70px] animate-pulse-slow pointer-events-none" />

      {/* Rotating 3D Neural Ring 1 */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-2 border border-cyan-400/20 rounded-full border-dashed pointer-events-none"
      />

      {/* Rotating 3D Neural Ring 2 - Opposite */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-10 border border-blue-500/30 rounded-full pointer-events-none"
        style={{
          boxShadow: 'inset 0 0 30px rgba(0,240,255,0.1)'
        }}
      />

      {/* Outer Holographic Circuit Nodes */}
      <div className="absolute inset-0 pointer-events-none">
        {[0, 60, 120, 180, 240, 300].map((deg, idx) => (
          <motion.div
            key={deg}
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.3, 0.9, 0.3],
            }}
            transition={{
              duration: 3 + idx % 2,
              repeat: Infinity,
              delay: idx * 0.4,
            }}
            className="absolute w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_15px_#00F0FF]"
            style={{
              top: `${50 + 44 * Math.sin((deg * Math.PI) / 180)}%`,
              left: `${50 + 44 * Math.cos((deg * Math.PI) / 180)}%`,
            }}
          />
        ))}
      </div>

      {/* Main 3D Floating & Rotating Neural Head Container */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        animate={{
          y: [0, -14, 0],
          rotateZ: [-1, 1, -1],
        }}
        transition={{
          y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
          rotateZ: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
        }}
        className="relative w-[85%] h-[85%] flex items-center justify-center cursor-pointer group"
      >
        {/* Holographic Projection Base Ring */}
        <div 
          className="absolute -bottom-8 w-3/4 h-12 bg-cyan-500/10 rounded-full blur-xl transform rotateX-[75deg]"
          style={{ transform: 'translateZ(-50px)' }}
        />

        {/* Neural Head Cutout Image with Electric Masking */}
        <div 
          className="relative w-full h-full rounded-3xl overflow-hidden glass-panel-glow border-cyan-400/40 p-2 transform transition-transform duration-500 group-hover:scale-105"
          style={{
            transform: 'translateZ(30px)',
          }}
        >
          {/* Internal Glow Backdrop */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#02040A] via-transparent to-cyan-900/30 z-10 pointer-events-none" />
          
          {/* Main Neural Head Image */}
          <img
            src="/assets/neural_head.jpg"
            alt="NEUROREEL AI Neural Brain Visual"
            className="w-full h-full object-cover object-center rounded-2xl filter brightness-110 contrast-125 transition-all duration-700 group-hover:brightness-125"
          />

          {/* Circuit Scan Line Animation */}
          <motion.div
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-x-0 h-24 bg-gradient-to-b from-transparent via-cyan-400/25 to-transparent z-20 pointer-events-none"
          />

          {/* Neural Synapse Sparks */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            <div className="absolute top-1/4 left-1/3 w-2 h-2 rounded-full bg-white shadow-[0_0_20px_#FFFFFF] animate-ping" />
            <div className="absolute top-1/2 right-1/4 w-2 h-2 rounded-full bg-cyan-300 shadow-[0_0_20px_#00F5FF] animate-pulse" />
            <div className="absolute bottom-1/3 left-1/2 w-2.5 h-2.5 rounded-full bg-blue-400 shadow-[0_0_25px_#0070F3] animate-ping" />
          </div>

          {/* Holographic Floating Status Badge */}
          <motion.div
            style={{ transform: 'translateZ(60px)' }}
            className="absolute bottom-4 left-4 right-4 z-30 glass-panel border border-cyan-400/30 px-3.5 py-2 rounded-xl flex items-center justify-between backdrop-blur-md"
          >
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-mono tracking-widest text-cyan-300 uppercase">
                NEURAL CORE ACTIVE
              </span>
            </div>
            <span className="text-[10px] font-mono text-slate-400">
              100 GFLOPS
            </span>
          </motion.div>
        </div>

        {/* Floating AI Data Pills */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          className="absolute -top-4 -right-4 z-40 glass-panel border-blue-400/40 px-3.5 py-1.5 rounded-full shadow-cyan-glow flex items-center gap-2"
          style={{ transform: 'translateZ(80px)' }}
        >
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-xs font-medium text-white">Script Engine Online</span>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute -bottom-4 -left-4 z-40 glass-panel border-cyan-400/40 px-3.5 py-1.5 rounded-full shadow-electric-glow flex items-center gap-2"
          style={{ transform: 'translateZ(70px)' }}
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-xs font-medium text-white">3D Reel Renderer 60FPS</span>
        </motion.div>
      </motion.div>
    </div>
  );
};
