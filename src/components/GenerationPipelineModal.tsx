import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, CheckCircle2, Cpu, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ReelPromptInput } from '../types/reel';

interface GenerationPipelineModalProps {
  isOpen: boolean;
  input: ReelPromptInput;
  onComplete: () => void;
}

export const GenerationPipelineModal: React.FC<GenerationPipelineModalProps> = ({
  isOpen,
  input,
  onComplete,
}) => {
  const [progress, setProgress] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const steps = [
    'Analyzing topic matrix & target audience...',
    'Evaluating viral hook dynamics...',
    'Generating 5-scene visual script...',
    'Synthesizing lossless AI voiceover track...',
    'Rendering kinetic neon captions & sound FX...',
    'Calculating AI Viral Score (94/100)...',
    'Finalizing 9:16 vertical Reel render...',
  ];

  useEffect(() => {
    if (!isOpen) {
      setProgress(0);
      setCurrentStepIndex(0);
      return;
    }

    const durationMs = 4500;
    const intervalMs = 50;
    const totalTicks = durationMs / intervalMs;
    let ticks = 0;

    const timer = setInterval(() => {
      ticks++;
      const currentProgress = Math.min(Math.floor((ticks / totalTicks) * 100), 100);
      setProgress(currentProgress);

      const stepIdx = Math.min(
        Math.floor((currentProgress / 100) * steps.length),
        steps.length - 1
      );
      setCurrentStepIndex(stepIdx);

      if (currentProgress >= 100) {
        clearInterval(timer);
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00F0FF', '#0070F3', '#38BDF8', '#FFFFFF'],
        });
        setTimeout(() => {
          onComplete();
        }, 800);
      }
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative w-full max-w-xl glass-panel-glow rounded-3xl p-8 border-cyan-400/50 text-center space-y-8 shadow-[0_0_90px_rgba(0,240,255,0.3)]"
        >
          {/* Header */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-bold tracking-widest uppercase shadow-cyan-glow">
              <Cpu className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
              <span>NEURAL ENGINE ACTIVATED</span>
            </div>
            <h3 className="text-2xl font-extrabold text-white font-display">
              Synthesizing Your AI Reel
            </h3>
            <p className="text-xs text-slate-300 font-mono truncate px-4">
              "{input.topic}"
            </p>
          </div>

          {/* Central 3D Circular Progress Visualizer */}
          <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
            {/* Outer Rotating Glowing Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-400/40 shadow-cyan-glow"
            />

            {/* Inner Counter Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-3 rounded-full border border-blue-500/30"
            />

            {/* Core Neural Pulse Node */}
            <div className="relative w-32 h-32 rounded-full bg-gradient-to-tr from-blue-600/30 via-cyan-500/20 to-black border border-cyan-400/40 flex flex-col items-center justify-center shadow-electric-glow">
              <span className="text-4xl font-extrabold text-cyan-300 font-display">
                {progress}%
              </span>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mt-1">
                {progress < 100 ? 'PROCESSING' : 'COMPLETE'}
              </span>
            </div>
          </div>

          {/* Current Step Output */}
          <div className="space-y-3 bg-black/40 p-4 rounded-2xl border border-white/5">
            <div className="flex items-center justify-center gap-2 text-sm font-semibold text-cyan-300 font-mono">
              <Zap className="w-4 h-4 text-cyan-400 animate-pulse" />
              <span>{steps[currentStepIndex]}</span>
            </div>

            {/* Micro Progress Bar */}
            <div className="w-full h-1.5 bg-black/60 rounded-full overflow-hidden border border-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="text-[11px] text-slate-400 font-mono">
            NEUROREEL v4.2 • 60 FPS Video Pipeline • Lossless Audio
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
