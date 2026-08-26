import React from 'react';
import { motion } from 'framer-motion';
import { Brain, FileText, Sparkles, Mic, Sliders, Rocket } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data/demoData';

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-6 h-6 text-cyan-400" />,
  FileText: <FileText className="w-6 h-6 text-blue-400" />,
  Sparkles: <Sparkles className="w-6 h-6 text-cyan-300 animate-spin-slow" />,
  Mic: <Mic className="w-6 h-6 text-indigo-400" />,
  Sliders: <Sliders className="w-6 h-6 text-cyan-400" />,
  Rocket: <Rocket className="w-6 h-6 text-emerald-400" />,
};

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="relative py-28 px-4 sm:px-8">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-cyan-400/30 text-cyan-300 text-xs font-mono tracking-widest uppercase shadow-cyan-glow">
            <span>NEURAL PIPELINE ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            FROM THOUGHT TO <span className="text-electric-gradient">REEL.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            One idea. One prompt. One finished, scroll-stopping video.
          </p>
        </div>

        {/* 6 Large 3D Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HOW_IT_WORKS_STEPS.map((stepItem, idx) => (
            <motion.div
              key={stepItem.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative glass-panel rounded-3xl p-7 border-cyan-500/20 hover:border-cyan-400/60 transition-all duration-300 shadow-glass hover:shadow-[0_0_40px_rgba(0,240,255,0.25)] flex flex-col justify-between"
            >
              {/* Internal Gradient Glow on Hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500/10 via-transparent to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div>
                {/* Top Row: Step Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300">
                    {stepItem.step}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-black/50 border border-cyan-400/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-cyan-glow">
                    {iconMap[stepItem.icon]}
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="text-xl font-extrabold text-white font-display tracking-wide mb-3 group-hover:text-cyan-300 transition-colors">
                  {stepItem.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {stepItem.description}
                </p>
              </div>

              {/* Bottom Tag */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>{stepItem.detail}</span>
                <span className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  Active ✦
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
