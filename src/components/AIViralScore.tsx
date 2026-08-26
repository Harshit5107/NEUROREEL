import React from 'react';
import { motion } from 'framer-motion';
import { Award, Zap, TrendingUp, Eye, Flame } from 'lucide-react';

interface AIViralScoreProps {
  overallScore?: number;
  breakdown?: {
    hook: number;
    retention: number;
    clarity: number;
    cta: number;
  };
}

export const AIViralScore: React.FC<AIViralScoreProps> = ({
  overallScore = 92,
  breakdown = { hook: 94, retention: 91, clarity: 96, cta: 89 },
}) => {
  return (
    <section className="relative py-20 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto glass-panel-glow rounded-3xl p-8 sm:p-12 border-cyan-400/30 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center shadow-glass">
        
        {/* Left Column: Heading & Explanation */}
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-bold uppercase tracking-widest">
            <Flame className="w-3.5 h-3.5 text-cyan-400" />
            <span>ALGORITHMIC RETENTION MATRIX</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            MAKE EVERY <br />
            <span className="text-electric-gradient">SECOND COUNT.</span>
          </h2>

          <p className="text-slate-300 leading-relaxed font-normal text-sm sm:text-base">
            NEUROREEL doesn't just generate videos. It simulates 10,000 algorithmic viewer retention paths to score your Reel before you post.
          </p>

          {/* Breakdown Grid */}
          <div className="grid grid-cols-2 gap-4 pt-2 font-mono">
            <div className="bg-black/50 p-4 rounded-2xl border border-white/10 space-y-1">
              <span className="text-xs text-slate-400 block uppercase">HOOK STRENGTH</span>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-cyan-300">{breakdown.hook}%</span>
                <span className="text-[10px] text-emerald-400">OPTIMAL</span>
              </div>
            </div>

            <div className="bg-black/50 p-4 rounded-2xl border border-white/10 space-y-1">
              <span className="text-xs text-slate-400 block uppercase font-mono">RETENTION PACING</span>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-blue-400">{breakdown.retention}%</span>
                <span className="text-[10px] text-cyan-300">HIGH ARC</span>
              </div>
            </div>

            <div className="bg-black/50 p-4 rounded-2xl border border-white/10 space-y-1">
              <span className="text-xs text-slate-400 block uppercase">VISUAL CLARITY</span>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-emerald-300">{breakdown.clarity}%</span>
                <span className="text-[10px] text-emerald-400">HD 60FPS</span>
              </div>
            </div>

            <div className="bg-black/50 p-4 rounded-2xl border border-white/10 space-y-1">
              <span className="text-xs text-slate-400 block uppercase">CTA POTENTIAL</span>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-purple-300">{breakdown.cta}%</span>
                <span className="text-[10px] text-purple-400">HIGH CONV</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Large 3D Circular Animated Score Gauge */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center">
          <div className="relative w-64 h-64 sm:w-72 sm:h-72 flex items-center justify-center">
            
            {/* Outer Rotating Energy Ring 1 */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/40 shadow-cyan-glow"
            />

            {/* Outer Rotating Energy Ring 2 - Reverse */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-4 rounded-full border border-blue-500/30"
              style={{
                boxShadow: 'inset 0 0 30px rgba(0,240,255,0.15)',
              }}
            />

            {/* Inner Core Score Dial */}
            <div className="relative w-48 h-48 sm:w-52 sm:h-52 rounded-full bg-gradient-to-tr from-[#02040A] via-cyan-950/40 to-blue-900/30 border-2 border-cyan-400/50 flex flex-col items-center justify-center shadow-electric-glow">
              <Award className="w-8 h-8 text-cyan-400 mb-1 animate-pulse" />
              <span className="text-5xl font-extrabold text-white font-display">
                {overallScore}
              </span>
              <span className="text-xs font-mono font-bold text-cyan-300 tracking-widest uppercase mt-1">
                AI VIRAL SCORE
              </span>
            </div>

            {/* Orbiting Satellite Data Nodes */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 pointer-events-none"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400 text-[10px] font-mono font-bold text-cyan-300 shadow-cyan-glow">
                98% Retention Predictor
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};
