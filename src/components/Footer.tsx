import React from 'react';
import { Zap, Github, Twitter, Disc as Discord, Youtube } from 'lucide-react';

interface FooterProps {
  onOpenStudio: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenStudio }) => {
  return (
    <footer className="bg-[#02040A] border-t border-cyan-500/15 py-16 px-4 sm:px-8 text-slate-400 font-sans text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/5">
        
        {/* Brand Column */}
        <div className="md:col-span-4 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-[1px] shadow-cyan-glow">
              <div className="w-full h-full bg-[#02040A] rounded-[11px] flex items-center justify-center">
                <Zap className="w-4 h-4 text-cyan-400 fill-cyan-400/20" />
              </div>
            </div>
            <span className="text-xl font-bold tracking-wider text-white font-display">
              NEURO<span className="text-electric-gradient">REEL</span>
            </span>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
            AI that doesn't just generate videos. It understands what makes people watch.
          </p>

          <div className="flex items-center gap-3 text-cyan-400 pt-2">
            <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 hover:text-white transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 hover:text-white transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 hover:text-white transition-colors">
              <Discord className="w-4 h-4" />
            </a>
            <a href="#" className="p-2 rounded-lg bg-white/5 hover:bg-cyan-500/20 hover:text-white transition-colors">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Links Column 1 */}
        <div className="md:col-span-2 space-y-3 font-mono text-xs">
          <span className="text-white font-bold block uppercase tracking-wider">PRODUCT</span>
          <ul className="space-y-2">
            <li><a href="#how-it-works" className="hover:text-cyan-400 transition-colors">How It Works</a></li>
            <li><a href="#generator" className="hover:text-cyan-400 transition-colors">AI Generator</a></li>
            <li><a href="#analytics" className="hover:text-cyan-400 transition-colors">Viral Telemetry</a></li>
            <li><a href="#features" className="hover:text-cyan-400 transition-colors">Feature Suite</a></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div className="md:col-span-2 space-y-3 font-mono text-xs">
          <span className="text-white font-bold block uppercase tracking-wider">STUDIO</span>
          <ul className="space-y-2">
            <li>
              <button onClick={onOpenStudio} className="hover:text-cyan-400 transition-colors text-left">
                Creator Dashboard
              </button>
            </li>
            <li><a href="#generator" className="hover:text-cyan-400 transition-colors">Script Builder</a></li>
            <li><a href="#analytics" className="hover:text-cyan-400 transition-colors">AI Score Engine</a></li>
            <li><a href="#architecture" className="hover:text-cyan-400 transition-colors">GPU Pipeline</a></li>
          </ul>
        </div>

        {/* Links Column 3 */}
        <div className="md:col-span-4 space-y-3 font-mono text-xs">
          <span className="text-white font-bold block uppercase tracking-wider">SYSTEM STATUS</span>
          <div className="glass-panel p-4 rounded-xl border-cyan-400/20 space-y-2">
            <div className="flex items-center gap-2 text-cyan-300 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>ALL NEURAL ENGINES OPERATIONAL</span>
            </div>
            <p className="text-[11px] text-slate-400 font-normal">
              Average render time: 3.8s • 60FPS Video Export • Lossless Audio
            </p>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 font-mono gap-4">
        <span>© 2026 NEUROREEL Inc. All rights reserved.</span>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Terms of Service</a>
          <a href="#" className="hover:text-white">Hackathon Demo Spec</a>
        </div>
      </div>
    </footer>
  );
};
