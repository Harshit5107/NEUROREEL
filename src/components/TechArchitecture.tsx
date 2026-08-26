import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, ArrowDown, Sparkles, Database, Video, Mic, BarChart2, Play } from 'lucide-react';

export const TechArchitecture: React.FC = () => {
  const nodes = [
    { title: 'USER IDEA', desc: 'Raw prompt & target parameters', icon: <Sparkles className="w-5 h-5 text-cyan-400" /> },
    { title: 'LANGUAGE MODEL', desc: 'GPT-4o / Claude 3.5 Sonnet context parser', icon: <Cpu className="w-5 h-5 text-blue-400" /> },
    { title: 'CONTENT ENGINE', desc: 'Hook generator & retention copywriting', icon: <Database className="w-5 h-5 text-cyan-300" /> },
    { title: 'VISUAL ENGINE', desc: '3D scene prompt synthesis & graphics', icon: <Video className="w-5 h-5 text-purple-400" /> },
    { title: 'VOICE ENGINE', desc: 'Neural audio synthesis & pacing', icon: <Mic className="w-5 h-5 text-indigo-400" /> },
    { title: 'VIDEO ENGINE', desc: 'Timeline FX & kinetic captions rendering', icon: <Cpu className="w-5 h-5 text-emerald-400" /> },
    { title: 'AI ANALYZER', desc: '10,000 viewer path virality simulation', icon: <BarChart2 className="w-5 h-5 text-amber-400" /> },
    { title: 'FINAL REEL', desc: '9:16 export ready for social publishing', icon: <Play className="w-5 h-5 text-cyan-400 fill-cyan-400" /> },
  ];

  return (
    <section id="architecture" className="relative py-28 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-cyan-400/30 text-cyan-300 text-xs font-mono tracking-widest uppercase shadow-cyan-glow">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>NEURAL ARCHITECTURE SPECIFICATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            POWERED BY <span className="text-electric-gradient">INTELLIGENCE.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            Multi-stage generative pipeline executing parallel model calls to deliver production-ready 60 FPS video.
          </p>
        </div>

        {/* Neural Node Network Diagram */}
        <div className="glass-panel-glow rounded-3xl p-8 sm:p-12 border-cyan-400/30 shadow-glass space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nodes.map((node, idx) => (
              <motion.div
                key={node.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="relative glass-panel rounded-2xl p-5 border-cyan-500/20 hover:border-cyan-400/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono text-cyan-400 font-bold">
                      NODE 0{idx + 1}
                    </span>
                    <div className="p-2 rounded-xl bg-black/60 border border-white/10 group-hover:scale-110 transition-transform">
                      {node.icon}
                    </div>
                  </div>

                  <h3 className="text-sm font-extrabold text-white font-display tracking-wide mb-1 group-hover:text-cyan-300 transition-colors">
                    {node.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-normal">
                    {node.desc}
                  </p>
                </div>

                {/* Animated data pulse line */}
                {idx < nodes.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-0.5 bg-cyan-400/30 z-20">
                    <motion.div
                      animate={{ x: [0, 24] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                      className="w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-cyan-glow"
                    />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="pt-4 border-t border-cyan-500/20 flex flex-wrap items-center justify-between text-xs font-mono text-slate-400 gap-4">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Latency: &lt; 4.2 seconds end-to-end
            </span>
            <span>Parallel GPU Inference • WebGL Shader Compositing</span>
          </div>
        </div>

      </div>
    </section>
  );
};
