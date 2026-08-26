import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layers, Volume2, Type, Eye, BarChart3, Sparkles } from 'lucide-react';
import { FEATURE_CARDS } from '../data/demoData';

const iconMap: Record<string, React.ReactNode> = {
  Code: <Code className="w-6 h-6 text-cyan-400" />,
  Layers: <Layers className="w-6 h-6 text-blue-400" />,
  Volume2: <Volume2 className="w-6 h-6 text-cyan-300" />,
  Type: <Type className="w-6 h-6 text-purple-400" />,
  Eye: <Eye className="w-6 h-6 text-indigo-400" />,
  BarChart3: <BarChart3 className="w-6 h-6 text-emerald-400" />,
};

export const FeaturesGrid: React.FC = () => {
  return (
    <section id="features" className="relative py-28 px-4 sm:px-8">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-cyan-400/30 text-cyan-300 text-xs font-mono tracking-widest uppercase shadow-cyan-glow">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>FULL SUITE GENERATIVE SYSTEM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            ONE AI. <span className="text-electric-gradient">EVERY PART OF YOUR REEL.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            No expensive video editors or stock footage subscriptions. NEUROREEL handles every layer of vertical short-form production.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURE_CARDS.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative glass-panel rounded-3xl p-7 border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 shadow-glass flex flex-col justify-between"
            >
              {/* Internal subtle gradient overlay */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`} />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-black/60 border border-cyan-400/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform shadow-cyan-glow">
                    {iconMap[card.iconName]}
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 uppercase">
                    {card.badge}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-white font-display tracking-wide group-hover:text-cyan-300 transition-colors">
                  {card.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-cyan-400 group-hover:translate-x-1 transition-transform">
                <span>EXPLORE ENGINE</span>
                <span>→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
