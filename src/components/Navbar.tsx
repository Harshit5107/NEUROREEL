import React from 'react';
import { Sparkles, Zap, LayoutDashboard, PlayCircle } from 'lucide-react';

interface NavbarProps {
  onOpenDemo: () => void;
  onOpenStudio: () => void;
  isStudioMode: boolean;
  onToggleStudioMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenDemo,
  onOpenStudio,
  isStudioMode,
  onToggleStudioMode,
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4">
      <div className="max-w-7xl mx-auto glass-panel rounded-2xl px-5 py-3 flex items-center justify-between border-cyan-500/20 shadow-2xl">
        {/* Brand Logo */}
        <div 
          onClick={onToggleStudioMode}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-[1px] shadow-electric-glow">
            <div className="w-full h-full bg-[#02040A] rounded-[11px] flex items-center justify-center">
              <Zap className="w-5 h-5 text-cyan-400 fill-cyan-400/20 group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-bold tracking-wider text-white font-display">
                NEURO<span className="text-electric-gradient font-extrabold">REEL</span>
              </span>
              <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-cyan-500/10 border border-cyan-400/30 text-cyan-300">
                PRO 3D
              </span>
            </div>
            <p className="text-[10px] text-neuro-dimText font-mono tracking-tight hidden sm:block">
              AI SHORT VIDEO STUDIO
            </p>
          </div>
        </div>

        {/* Navigation Links */}
        {!isStudioMode && (
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#how-it-works" className="hover:text-cyan-400 transition-colors">
              How It Works
            </a>
            <a href="#generator" className="hover:text-cyan-400 transition-colors">
              AI Generator
            </a>
            <a href="#analytics" className="hover:text-cyan-400 transition-colors">
              AI Viral Score
            </a>
            <a href="#features" className="hover:text-cyan-400 transition-colors">
              Features
            </a>
            <a href="#architecture" className="hover:text-cyan-400 transition-colors">
              Technology
            </a>
          </nav>
        )}

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Hackathon Demo Button */}
          <button
            onClick={onOpenDemo}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-yellow-500/20 border border-amber-400/40 text-amber-300 hover:text-white hover:border-amber-400 hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all text-xs font-semibold"
            title="Launch automated AI Reel generation showcase for hackathon judges"
          >
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            <span className="hidden sm:inline font-mono">⚡ HACKATHON DEMO</span>
            <span className="sm:hidden font-mono">⚡ DEMO</span>
          </button>

          {/* Toggle Studio / Launch Studio CTA */}
          <button
            onClick={onOpenStudio}
            className="relative group px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-[length:200%_auto] text-white font-semibold text-xs sm:text-sm shadow-blue-glow hover:shadow-cyan-glow transition-all duration-300 flex items-center gap-2"
          >
            {isStudioMode ? (
              <>
                <PlayCircle className="w-4 h-4" />
                <span>Back to Showcase</span>
              </>
            ) : (
              <>
                <LayoutDashboard className="w-4 h-4" />
                <span>Launch Studio</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
