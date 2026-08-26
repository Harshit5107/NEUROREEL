import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, CheckCircle2, Play, Pause, Volume2, VolumeX, Award, Zap, Film } from 'lucide-react';
import { HACKATHON_DEMO_REEL } from '../data/demoData';

interface HackathonDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLaunchStudio: () => void;
}

export const HackathonDemoModal: React.FC<HackathonDemoModalProps> = ({
  isOpen,
  onClose,
  onLaunchStudio,
}) => {
  const [pipelineStep, setPipelineStep] = useState(0);
  const [isGenerating, setIsGenerating] = useState(true);
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const steps = [
    { name: 'IDEA', desc: 'Analyzing Topic & Audience Matrix' },
    { name: 'SCRIPT', desc: 'Crafting High-Retention 30s Hook' },
    { name: 'SCENES', desc: 'Generating 5 Cinematic Visual Scenes' },
    { name: 'VOICE', desc: 'Synthesizing Neural Audio Stream' },
    { name: 'CAPTIONS', desc: 'Syncing Kinetic Neon Subtitles' },
    { name: 'ANALYSIS', desc: 'Computing AI Viral Score (94/100)' },
  ];

  useEffect(() => {
    if (!isOpen) {
      setPipelineStep(0);
      setIsGenerating(true);
      setActiveSceneIndex(0);
      return;
    }

    // Automated 6-step generation sequence
    const interval = setInterval(() => {
      setPipelineStep((prev) => {
        if (prev < steps.length - 1) {
          return prev + 1;
        } else {
          setIsGenerating(false);
          clearInterval(interval);
          return prev;
        }
      });
    }, 600);

    return () => clearInterval(interval);
  }, [isOpen]);

  // Synchronize HTML5 video element state
  useEffect(() => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying, activeSceneIndex]);

  // Auto-advance scenes when video is playing
  useEffect(() => {
    if (isGenerating || !isPlaying) return;
    const currentScene = HACKATHON_DEMO_REEL.scenes[activeSceneIndex];
    const duration = (currentScene?.durationSec || 5) * 1000;
    const sceneTimer = setTimeout(() => {
      setActiveSceneIndex((prev) => (prev + 1) % HACKATHON_DEMO_REEL.scenes.length);
    }, duration);
    return () => clearTimeout(sceneTimer);
  }, [isGenerating, isPlaying, activeSceneIndex]);

  if (!isOpen) return null;

  const currentScene = HACKATHON_DEMO_REEL.scenes[activeSceneIndex];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-5xl max-h-[90vh] glass-panel-glow rounded-3xl border-cyan-400/40 overflow-hidden flex flex-col shadow-[0_0_90px_rgba(0,240,255,0.3)]"
        >
          {/* Header */}
          <div className="px-6 py-4 border-b border-cyan-500/20 flex items-center justify-between bg-black/60">
            <div className="flex items-center gap-3">
              <div className="px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-mono font-bold flex items-center gap-1.5 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>HACKATHON DEMO MODE</span>
              </div>
              <h3 className="text-lg font-bold text-white font-display hidden sm:block">
                Automated AI Video Pipeline Showcase
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 overflow-y-auto flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Live Pipeline Progress & Specs */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1 font-bold">
                  Target Demo Prompt
                </div>
                <h4 className="text-2xl font-bold text-white font-display leading-tight">
                  "{HACKATHON_DEMO_REEL.topic}"
                </h4>
                <div className="flex flex-wrap gap-2 mt-3 text-xs font-mono">
                  <span className="px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-400/30 text-blue-300">
                    Audience: {HACKATHON_DEMO_REEL.audience}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-400/30 text-cyan-300">
                    Duration: {HACKATHON_DEMO_REEL.duration}
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-400/30 text-purple-300">
                    Style: {HACKATHON_DEMO_REEL.style}
                  </span>
                </div>
              </div>

              {/* Automated Pipeline Checkmarks */}
              <div className="glass-panel p-4 rounded-2xl border-white/10 space-y-3">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 font-bold">
                  NEURAL GENERATION PIPELINE STATUS
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {steps.map((step, idx) => {
                    const isDone = idx <= pipelineStep;
                    const isCurrent = idx === pipelineStep && isGenerating;
                    return (
                      <div
                        key={step.name}
                        className={`px-3 py-2 rounded-xl border transition-all flex items-center justify-between text-xs font-mono ${
                          isDone
                            ? 'bg-cyan-500/15 border-cyan-400/40 text-cyan-300'
                            : 'bg-black/30 border-white/5 text-slate-600'
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {isDone ? (
                            <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                          ) : (
                            <div className="w-4 h-4 rounded-full border border-slate-600" />
                          )}
                          <span className="font-bold">{step.name}</span>
                        </div>
                        <span className="text-[10px]">
                          {isCurrent ? 'generating...' : isDone ? '✓ DONE' : 'WAITING'}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* AI Viral Score Breakdown */}
              <div className="glass-panel-glow p-4 rounded-2xl border-cyan-400/30 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 p-[2px] shadow-cyan-glow">
                    <div className="w-full h-full bg-[#02040A] rounded-[14px] flex flex-col items-center justify-center">
                      <span className="text-xl font-extrabold text-cyan-300 font-display">94</span>
                      <span className="text-[8px] font-mono text-slate-400 uppercase">/100</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-1 font-bold">
                      <Award className="w-3.5 h-3.5" />
                      <span>AI VIRAL SCORE</span>
                    </div>
                    <div className="text-sm font-bold text-white mt-0.5">
                      Predicted Retention: 88.4%
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      Estimated Views: {HACKATHON_DEMO_REEL.estimatedViews}
                    </div>
                  </div>
                </div>

                <button
                  onClick={onLaunchStudio}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-xs shadow-blue-glow hover:shadow-cyan-glow transition-all flex items-center gap-2 uppercase tracking-wider"
                >
                  <Zap className="w-4 h-4" />
                  <span>Open Studio</span>
                </button>
              </div>
            </div>

            {/* Right Column: Real Playable 9:16 Smartphone Video Preview */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-[270px] sm:w-[300px] aspect-[9/16] rounded-[36px] glass-panel-glow border-2 border-cyan-400/50 p-2.5 shadow-[0_0_60px_rgba(0,240,255,0.35)] flex flex-col overflow-hidden">
                
                {/* Smartphone Speaker notch */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-3.5 bg-black rounded-full z-40 border border-white/10 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                </div>

                {/* Vertical Reel Content Screen */}
                <div className={`relative w-full h-full rounded-[28px] overflow-hidden bg-gradient-to-b ${currentScene.visualBgGradient} flex flex-col justify-between`}>
                  
                  {/* Real MP4 Video Element */}
                  <video
                    ref={videoRef}
                    key={currentScene.videoUrl}
                    src={currentScene.videoUrl}
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover z-0 filter brightness-90 contrast-110"
                  />

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/60 z-10 pointer-events-none" />

                  {/* Top Bar */}
                  <div className="pt-5 px-3 flex items-center justify-between z-20 text-white/90">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                      <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-cyan-300 bg-black/60 px-2 py-0.5 rounded border border-cyan-400/40">
                        AI REEL PREVIEW
                      </span>
                    </div>
                    <span className="text-[10px] font-mono bg-black/60 px-2 py-0.5 rounded-full border border-white/10">
                      SCENE {activeSceneIndex + 1}/5
                    </span>
                  </div>

                  {/* Center Kinetic Subtitles Overlay */}
                  <div className="my-auto z-20 text-center space-y-2 px-3">
                    <motion.div
                      key={activeSceneIndex}
                      initial={{ opacity: 0, y: 15, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="bg-black/80 backdrop-blur-md px-3.5 py-3 rounded-2xl border border-cyan-400/50 shadow-electric-glow"
                    >
                      <p className="text-xs sm:text-sm font-extrabold text-cyan-300 uppercase tracking-wide leading-relaxed font-display">
                        {currentScene.captionText}
                      </p>
                    </motion.div>
                    <p className="text-[11px] text-slate-200 italic bg-black/60 p-2 rounded-lg border border-white/10">
                      "{currentScene.narration}"
                    </p>
                  </div>

                  {/* Bottom Controls & Audio Visualizer */}
                  <div className="z-20 p-3 space-y-2">
                    {/* Audio Waveform */}
                    <div className="flex items-center justify-center gap-1 h-5 bg-black/60 py-1 px-3 rounded-full border border-cyan-500/20">
                      {[12, 24, 16, 32, 20, 28, 14, 30, 18, 26, 12].map((h, i) => (
                        <motion.div
                          key={i}
                          animate={{ height: isPlaying ? [6, h, 6] : 6 }}
                          transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.08 }}
                          className="w-1 bg-cyan-400 rounded-full shadow-[0_0_6px_#00F0FF]"
                        />
                      ))}
                    </div>

                    {/* Scene Navigation Bar */}
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => setIsPlaying(!isPlaying)}
                          className="p-2 rounded-full bg-cyan-500/30 border border-cyan-400/50 text-cyan-300 hover:bg-cyan-500/50 transition-colors shadow-cyan-glow"
                        >
                          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-cyan-300" />}
                        </button>

                        <button
                          onClick={() => {
                            setIsMuted(!isMuted);
                            if (videoRef.current) videoRef.current.muted = !isMuted;
                          }}
                          className="p-2 rounded-full bg-black/50 border border-white/20 text-slate-300 hover:text-white transition-colors"
                        >
                          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-cyan-400" />}
                        </button>
                      </div>

                      <div className="flex gap-1.5">
                        {HACKATHON_DEMO_REEL.scenes.map((_, idx) => (
                          <div
                            key={idx}
                            onClick={() => setActiveSceneIndex(idx)}
                            className={`h-1.5 rounded-full cursor-pointer transition-all ${
                              idx === activeSceneIndex ? 'w-5 bg-cyan-400' : 'w-1.5 bg-white/30'
                            }`}
                          />
                        ))}
                      </div>

                      <span className="text-[10px] font-mono text-cyan-300 font-bold bg-cyan-500/20 px-2 py-0.5 rounded border border-cyan-400/30">
                        60 FPS
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
