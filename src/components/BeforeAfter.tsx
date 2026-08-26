import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Check } from 'lucide-react';

export const BeforeAfter: React.FC = () => {
  return (
    <section className="relative py-24 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-cyan-400/30 text-cyan-300 text-xs font-mono tracking-widest uppercase shadow-cyan-glow">
            <span>THE NEURAL TRANSFORMATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            ONE RAW PROMPT. <br />
            <span className="text-electric-gradient">A COMPLETE VIRAL REEL.</span>
          </h2>
        </div>

        {/* Side-by-Side Comparison Container */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left Box: RAW IDEA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 glass-panel rounded-3xl p-8 border-slate-700/50 space-y-6 text-left"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                BEFORE (YOUR INPUT)
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400">
                1 SENTENCE
              </span>
            </div>

            <div className="bg-black/60 p-6 rounded-2xl border border-white/10 text-slate-300 font-mono text-sm space-y-2">
              <p className="text-white font-semibold text-base">
                "Make a Reel about AI for college students."
              </p>
              <p className="text-xs text-slate-500">
                • No visual timing<br />
                • No copywriting hooks<br />
                • No audio sync
              </p>
            </div>
          </motion.div>

          {/* Center Streaming Particle Beam Connector */}
          <div className="md:col-span-2 flex flex-col items-center justify-center py-4 md:py-0">
            <div className="relative w-full flex items-center justify-center">
              {/* Particle animation line */}
              <div className="w-full h-1 bg-gradient-to-r from-slate-600 via-cyan-400 to-blue-600 rounded-full" />
              <motion.div
                animate={{ x: [-40, 40] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute w-8 h-8 rounded-full bg-cyan-400 border-2 border-white shadow-electric-glow flex items-center justify-center"
              >
                <Zap className="w-4 h-4 text-black fill-black" />
              </motion.div>
            </div>
            <span className="text-[10px] font-mono text-cyan-300 mt-3 font-bold uppercase tracking-widest">
              AI ENGINE
            </span>
          </div>

          {/* Right Box: AI GENERATED REEL PIPELINE */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5 glass-panel-glow rounded-3xl p-8 border-cyan-400/40 space-y-6 text-left shadow-glass"
          >
            <div className="flex items-center justify-between border-b border-cyan-500/20 pb-4">
              <span className="text-xs font-mono font-bold text-cyan-300 uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                AFTER (NEUROREEL OUTPUT)
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-400/30">
                100% READY
              </span>
            </div>

            {/* Pipeline Flow Badges */}
            <div className="space-y-2 font-mono text-xs">
              {[
                { name: 'HOOK', text: 'Stop studying harder. Use AI to study 10x faster.' },
                { name: 'SCRIPT', text: '5 structured visual beats with clear value spikes.' },
                { name: 'SCENES', text: '5 HD 3D neural graphics & volumetric lighting.' },
                { name: 'VOICE', text: 'Studio AI Marcus voiceover with emotional pacing.' },
                { name: 'CAPTIONS', text: 'Kinetic neon subtitles with emphasis highlights.' },
                { name: 'CTA', text: 'High-conversion follow trigger & tag reminder.' },
              ].map((item) => (
                <div
                  key={item.name}
                  className="bg-black/60 px-3.5 py-2.5 rounded-xl border border-cyan-500/20 flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="font-bold text-cyan-300">{item.name}</span>
                  </div>
                  <span className="text-slate-300 text-[11px] truncate max-w-[200px]">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
