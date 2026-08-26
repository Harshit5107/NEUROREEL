import React from 'react';
import { motion } from 'framer-motion';
import { LineChart, Activity, Eye, Flame, Users, Zap, TrendingUp } from 'lucide-react';

export const AIAnalytics: React.FC = () => {
  return (
    <section id="analytics" className="relative py-28 px-4 sm:px-8">
      {/* Radial Blue Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-cyan-400/30 text-cyan-300 text-xs font-mono tracking-widest uppercase shadow-cyan-glow">
            <Activity className="w-3.5 h-3.5 text-cyan-400" />
            <span>NEURAL PERFORMANCE TELEMETRY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            YOUR REEL, UNDER THE <br />
            <span className="text-electric-gradient">AI MICROSCOPE.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            Holographic analytics predicting viewer drop-off points, hook efficacy, and conversion triggers before you hit publish.
          </p>
        </div>

        {/* 3D Holographic Chart Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Chart Card: Predicted Retention Curve */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 glass-panel-glow rounded-3xl p-6 sm:p-8 border-cyan-400/30 space-y-6 shadow-glass"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-cyan-500/20 pb-4">
              <div>
                <h3 className="text-lg font-bold text-white font-display flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-cyan-400" />
                  <span>Predicted Second-by-Second Viewer Retention</span>
                </h3>
                <p className="text-xs text-slate-400 font-mono mt-0.5">
                  AI Model Output vs Standard Industry Benchmark
                </p>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono">
                <span className="flex items-center gap-1.5 text-cyan-300">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-cyan-glow" />
                  NEUROREEL (88%)
                </span>
                <span className="flex items-center gap-1.5 text-slate-500">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                  Generic Reel (34%)
                </span>
              </div>
            </div>

            {/* Simulated retention graph curve */}
            <div className="relative h-56 w-full pt-4">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 500 150">
                <defs>
                  <linearGradient id="retentionGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#0070F3" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Grid lines */}
                <line x1="0" y1="30" x2="500" y2="30" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                <line x1="0" y1="75" x2="500" y2="75" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />
                <line x1="0" y1="120" x2="500" y2="120" stroke="rgba(255,255,255,0.05)" strokeDasharray="4 4" />

                {/* Generic Low Retention Line */}
                <path
                  d="M 0 40 Q 60 110 120 125 T 250 135 T 500 140"
                  fill="none"
                  stroke="#475569"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                />

                {/* NEUROREEL High Retention Smooth Curve */}
                <path
                  d="M 0 15 Q 80 18 160 30 T 320 35 T 500 45 L 500 150 L 0 150 Z"
                  fill="url(#retentionGrad)"
                />
                <path
                  d="M 0 15 Q 80 18 160 30 T 320 35 T 500 45"
                  fill="none"
                  stroke="#00F0FF"
                  strokeWidth="3.5"
                  className="filter drop-shadow-[0_0_10px_#00F0FF]"
                />

                {/* Interactive Data Point Callouts */}
                <circle cx="160" cy="30" r="5" fill="#00F0FF" />
                <circle cx="320" cy="35" r="5" fill="#0070F3" />
              </svg>

              {/* Timeline markers */}
              <div className="flex justify-between text-[10px] font-mono text-slate-500 pt-2">
                <span>0s (Hook)</span>
                <span>10s (Value Peak)</span>
                <span>20s (Scene 3)</span>
                <span>30s (CTA)</span>
              </div>
            </div>
          </motion.div>

          {/* Right Metrics Stack */}
          <div className="lg:col-span-4 space-y-4">
            <div className="glass-panel p-5 rounded-2xl border-cyan-400/20 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-cyan-300">
                  <Flame className="w-4 h-4 text-amber-400" />
                  Hook Velocity Score
                </span>
                <span className="font-bold text-white">96 / 100</span>
              </div>
              <div className="w-full h-2 bg-black/60 rounded-full overflow-hidden border border-white/10">
                <div className="h-full w-[96%] bg-gradient-to-r from-amber-500 to-cyan-400 rounded-full" />
              </div>
              <p className="text-[11px] text-slate-400 font-normal">
                First 3 seconds trigger immediate dopamine engagement.
              </p>
            </div>

            <div className="glass-panel p-5 rounded-2xl border-blue-400/20 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-blue-300">
                  <Users className="w-4 h-4 text-blue-400" />
                  Audience Resonance
                </span>
                <span className="font-bold text-white">94%</span>
              </div>
              <div className="w-full h-2 bg-black/60 rounded-full overflow-hidden border border-white/10">
                <div className="h-full w-[94%] bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full" />
              </div>
              <p className="text-[11px] text-slate-400 font-normal">
                Tone & speed calibrated for Gen-Z & College demographic.
              </p>
            </div>

            <div className="glass-panel p-5 rounded-2xl border-purple-400/20 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-purple-300">
                  <Zap className="w-4 h-4 text-purple-400" />
                  Algorithm Virality Index
                </span>
                <span className="font-bold text-white">TIER S+</span>
              </div>
              <div className="w-full h-2 bg-black/60 rounded-full overflow-hidden border border-white/10">
                <div className="h-full w-[92%] bg-gradient-to-r from-purple-600 to-cyan-400 rounded-full" />
              </div>
              <p className="text-[11px] text-slate-400 font-normal">
                High probability of entering Instagram Explore feed.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
