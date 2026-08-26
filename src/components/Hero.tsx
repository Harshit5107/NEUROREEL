import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles, Wand2, ShieldCheck, Video } from 'lucide-react';
import { NeuralHead3D } from './NeuralHead3D';

interface HeroProps {
  onOpenGenerator: () => void;
  onOpenDemo: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenGenerator, onOpenDemo }) => {
  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Radial Blue Ambient Background Glow */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        
        {/* Left Column: Headline, Subtitle, CTAs & Holographic Floating Pill */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="lg:col-span-7 space-y-8 text-left"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-panel border-cyan-400/30 text-cyan-300 text-xs font-mono tracking-wide shadow-cyan-glow">
            <Wand2 className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
            <span>THINK IT. GENERATE IT. REEL IT.</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] font-display">
            TURN IDEAS INTO <br />
            <span className="text-electric-gradient drop-shadow-[0_0_35px_rgba(0,240,255,0.4)]">
              VIRAL REELS.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-normal leading-relaxed">
            <strong className="text-white font-semibold">NEUROREEL</strong> uses AI to transform your simple idea into a complete, high-retention short-form video — script, scenes, voiceover, kinetic captions, and visuals automatically.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onOpenGenerator}
              className="relative group overflow-hidden px-7 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-[length:200%_auto] text-white font-bold text-base shadow-blue-glow hover:shadow-cyan-glow hover:-translate-y-1 transition-all duration-300 flex items-center gap-3"
            >
              {/* Shine animation effect */}
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
              <span>Create Your Reel</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onOpenDemo}
              className="glass-button px-6 py-4 rounded-2xl text-slate-200 font-semibold text-base flex items-center gap-3 hover:text-white"
            >
              <Play className="w-4 h-4 text-cyan-400 fill-cyan-400" />
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Trust Badges */}
          <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>9:16 Optimized for Reels, Shorts & TikTok</span>
            </div>
            <div className="flex items-center gap-2">
              <Video className="w-4 h-4 text-blue-400" />
              <span>60 FPS AI Render Pipeline</span>
            </div>
          </div>

          {/* Holographic Floating Live AI Generator Preview Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pt-4"
          >
            <div 
              onClick={onOpenGenerator}
              className="glass-panel-glow max-w-md p-4 rounded-2xl border-cyan-400/30 cursor-pointer hover:border-cyan-400/60 transition-all group"
            >
              <div className="flex items-center justify-between border-b border-cyan-500/20 pb-2.5 mb-3">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                  <span>✦ AI REEL GENERATOR</span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">READY</span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center bg-black/40 px-3 py-1.5 rounded-lg border border-white/5">
                  <span className="text-slate-400">Topic</span>
                  <span className="text-white font-medium">"The Future of Artificial Intelligence"</span>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-black/40 p-2 rounded-lg text-center border border-white/5">
                    <span className="text-[10px] text-slate-400 block">Audience</span>
                    <span className="text-cyan-300 font-semibold text-[11px]">College Students</span>
                  </div>
                  <div className="bg-black/40 p-2 rounded-lg text-center border border-white/5">
                    <span className="text-[10px] text-slate-400 block">Duration</span>
                    <span className="text-blue-400 font-semibold text-[11px]">30 Seconds</span>
                  </div>
                  <div className="bg-black/40 p-2 rounded-lg text-center border border-white/5">
                    <span className="text-[10px] text-slate-400 block">Style</span>
                    <span className="text-emerald-400 font-semibold text-[11px]">Cinematic</span>
                  </div>
                </div>

                <div className="pt-1">
                  <div className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-center font-bold text-white text-xs tracking-wider uppercase group-hover:shadow-cyan-glow transition-all">
                    GENERATE REEL ✦
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: 3D Neural Head Presentation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="lg:col-span-5 relative"
        >
          <NeuralHead3D />
        </motion.div>

      </div>
    </section>
  );
};
