import React from 'react';
import { motion } from 'framer-motion';
import { Zap } from 'lucide-react';

export const FloatingOrb: React.FC = () => {
  return (
    <div className="relative py-16 flex items-center justify-center overflow-hidden">
      <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
        
        {/* Ambient Volumetric Glow */}
        <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-[60px] animate-pulse-slow" />

        {/* Ring 1 - Fast Clockwise Rotation */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 rounded-full border-2 border-cyan-400/30 border-dashed shadow-cyan-glow"
        />

        {/* Ring 2 - Slow Counter-Clockwise Rotation */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-4 rounded-full border border-blue-500/40"
          style={{ boxShadow: 'inset 0 0 20px rgba(0,240,255,0.2)' }}
        />

        {/* Ring 3 - Tilted 3D Orbit */}
        <motion.div
          animate={{ rotateX: [0, 360], rotateY: [360, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-2 rounded-full border border-cyan-300/20 pointer-events-none"
        />

        {/* Central Core Pulse */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            boxShadow: [
              '0 0 30px rgba(0, 240, 255, 0.4)',
              '0 0 60px rgba(0, 240, 255, 0.8)',
              '0 0 30px rgba(0, 240, 255, 0.4)',
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-blue-600 via-cyan-400 to-white flex items-center justify-center p-1 shadow-electric-glow"
        >
          <div className="w-full h-full rounded-full bg-[#02040A] flex flex-col items-center justify-center p-3 text-center">
            <Zap className="w-6 h-6 text-cyan-400 fill-cyan-400/30 animate-pulse" />
            <span className="text-[10px] font-mono font-bold text-cyan-300 tracking-widest uppercase mt-1">
              NEURO ORB
            </span>
          </div>
        </motion.div>

        {/* Floating Mini Particles around Orb */}
        {[0, 90, 180, 270].map((deg, i) => (
          <motion.div
            key={deg}
            animate={{
              scale: [0.8, 1.3, 0.8],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
            className="absolute w-2.5 h-2.5 rounded-full bg-cyan-300 shadow-[0_0_12px_#00F5FF]"
            style={{
              top: `${50 + 46 * Math.sin((deg * Math.PI) / 180)}%`,
              left: `${50 + 46 * Math.cos((deg * Math.PI) / 180)}%`,
            }}
          />
        ))}

      </div>
    </div>
  );
};
