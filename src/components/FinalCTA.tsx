import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Wand2 } from 'lucide-react';

interface FinalCTAProps {
  onOpenGenerator: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenGenerator }) => {
  return (
    <section className="relative py-32 px-4 sm:px-8 bg-black overflow-hidden border-t border-cyan-500/20">
      {/* Converging Blue Particles Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel border-cyan-400/30 text-cyan-300 text-xs font-mono tracking-widest uppercase shadow-cyan-glow">
          <Wand2 className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
          <span>JOIN THE AI VIDEO REVOLUTION</span>
        </div>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white font-display tracking-tight leading-[1.08]">
          YOUR NEXT REEL STARTS <br />
          <span className="text-electric-gradient drop-shadow-[0_0_40px_rgba(0,240,255,0.4)]">
            WITH ONE IDEA.
          </span>
        </h2>

        <p className="text-lg sm:text-xl text-slate-300 font-normal max-w-xl mx-auto">
          Stop editing. Start creating. Turn prompts into scroll-stopping social media videos in under 60 seconds.
        </p>

        {/* Primary Energetic CTA Button */}
        <div className="pt-4 flex justify-center">
          <button
            onClick={onOpenGenerator}
            className="relative group overflow-hidden px-9 py-5 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 bg-[length:200%_auto] text-white font-extrabold text-lg sm:text-xl shadow-cyan-glow hover:shadow-electric-glow hover:scale-105 transition-all duration-300 flex items-center gap-3 uppercase tracking-wider font-display"
          >
            <Sparkles className="w-6 h-6 text-white animate-pulse" />
            <span>CREATE YOUR FIRST REEL →</span>
          </button>
        </div>
      </div>
    </section>
  );
};
