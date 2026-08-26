import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Sparkles, Heart, MessageCircle, Share2, Film } from 'lucide-react';
import { GeneratedReel } from '../types/reel';

interface ReelPreviewPhoneProps {
  reel: GeneratedReel;
}

export const ReelPreviewPhone: React.FC<ReelPreviewPhoneProps> = ({ reel }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeSceneIdx, setActiveSceneIdx] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const scenes = reel.scenes && reel.scenes.length > 0 ? reel.scenes : [];
  const currentScene = scenes[activeSceneIdx] || scenes[0] || {
    captionText: '⚡ STOP STUDYING HARDER. MASTER AI NOW.',
    narration: 'Stop studying harder. Start using AI to study 10x faster before graduation.',
    visualBgGradient: 'from-blue-950 via-cyan-950 to-black',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-and-lines-41547-large.mp4'
  };

  // Synchronize HTML5 video element state
  useEffect(() => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying, activeSceneIdx]);

  // Auto-advance scene timer when playing
  useEffect(() => {
    if (!isPlaying || scenes.length === 0) return;
    const duration = (currentScene.durationSec || 5) * 1000;
    const timer = setTimeout(() => {
      setActiveSceneIdx((prev) => (prev + 1) % scenes.length);
    }, duration);
    return () => clearTimeout(timer);
  }, [isPlaying, activeSceneIdx, scenes]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  return (
    <div className="relative w-full max-w-sm mx-auto aspect-[9/18] sm:aspect-[9/16] rounded-[44px] glass-panel-glow border-2 border-cyan-400/50 p-3 shadow-[0_0_80px_rgba(0,240,255,0.35)] flex flex-col justify-between overflow-hidden">
      
      {/* Smartphone Dynamic Island / Speaker Notch */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-40 border border-white/10 flex items-center justify-between px-3">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        <span className="text-[9px] font-mono text-cyan-300 font-bold">NEURO REEL</span>
      </div>

      {/* Screen Frame */}
      <div className={`relative w-full h-full rounded-[36px] overflow-hidden bg-gradient-to-b ${currentScene.visualBgGradient} flex flex-col justify-between select-none`}>
        
        {/* Real Dynamic HTML5 Video Player Background */}
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

        {/* Video Overlay Gradient Tint */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/60 z-10 pointer-events-none" />

        {/* Header HUD */}
        <div className="pt-6 px-5 flex items-center justify-between z-30 text-white font-mono text-xs">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/30 border border-cyan-400/50 text-cyan-300 text-[10px] font-bold backdrop-blur-md flex items-center gap-1">
              <Film className="w-3 h-3 text-cyan-400" />
              <span>{reel.platform || 'Instagram Reel'}</span>
            </span>
          </div>
          <div className="flex items-center gap-1 text-[10px] text-cyan-300 bg-black/60 px-2.5 py-1 rounded-full border border-cyan-400/40 backdrop-blur-md font-bold">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span>VIRAL SCORE: {reel.viralScore || 94}/100</span>
          </div>
        </div>

        {/* Center Animated Kinetic Subtitles */}
        <div className="my-auto z-30 text-center space-y-3 px-4">
          <motion.div
            key={activeSceneIdx}
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-black/75 backdrop-blur-md p-4 rounded-2xl border border-cyan-400/50 shadow-electric-glow"
          >
            <span className="text-[10px] font-mono text-cyan-400 block mb-1 uppercase tracking-widest font-bold">
              SCENE {activeSceneIdx + 1} OF {scenes.length || 5} • AI GENERATED VIDEO
            </span>
            <p className="text-xs sm:text-sm font-extrabold text-cyan-300 uppercase tracking-wide leading-snug font-display drop-shadow-[0_0_10px_#00F0FF]">
              {currentScene.captionText}
            </p>
          </motion.div>

          <p className="text-[11px] text-slate-200 italic bg-black/60 backdrop-blur-sm p-2.5 rounded-xl border border-white/10">
            "{currentScene.narration}"
          </p>
        </div>

        {/* Right Floating Social Engagement Overlay */}
        <div className="absolute right-3 bottom-24 z-30 flex flex-col items-center gap-4 text-white">
          <div className="flex flex-col items-center gap-1">
            <div className="p-2.5 rounded-full bg-black/60 border border-white/20 text-pink-400 shadow-md">
              <Heart className="w-4 h-4 fill-pink-400/40" />
            </div>
            <span className="text-[9px] font-mono font-bold">48.2K</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="p-2.5 rounded-full bg-black/60 border border-white/20 text-cyan-400 shadow-md">
              <MessageCircle className="w-4 h-4" />
            </div>
            <span className="text-[9px] font-mono font-bold">1.4K</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="p-2.5 rounded-full bg-black/60 border border-white/20 text-emerald-400 shadow-md">
              <Share2 className="w-4 h-4" />
            </div>
            <span className="text-[9px] font-mono font-bold">Share</span>
          </div>
        </div>

        {/* Bottom Audio Wave & Playback Controller */}
        <div className="z-30 px-4 pb-4 space-y-2.5">
          {/* Waveform */}
          <div className="flex items-center justify-center gap-1.5 h-5 bg-black/60 backdrop-blur-sm py-1 px-3 rounded-full border border-cyan-500/20">
            {[10, 22, 14, 28, 18, 24, 12, 30, 16, 22, 14, 26, 12].map((h, idx) => (
              <motion.div
                key={idx}
                animate={{ height: isPlaying ? [4, h, 4] : 4 }}
                transition={{ duration: 0.5, repeat: Infinity, delay: idx * 0.06 }}
                className="w-1 bg-cyan-400 rounded-full shadow-[0_0_6px_#00F0FF]"
              />
            ))}
          </div>

          {/* Controls Bar */}
          <div className="flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2">
              <button
                onClick={togglePlay}
                className="p-2 rounded-full bg-cyan-500/30 border border-cyan-400/50 text-cyan-300 hover:bg-cyan-500/50 transition-colors shadow-cyan-glow"
                title={isPlaying ? "Pause Video" : "Play Video"}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-cyan-300" />}
              </button>

              <button
                onClick={toggleMute}
                className="p-2 rounded-full bg-black/50 border border-white/20 text-slate-300 hover:text-white transition-colors"
                title={isMuted ? "Unmute Audio" : "Mute Audio"}
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-cyan-400" />}
              </button>
            </div>

            {/* Scene Selector Dots */}
            <div className="flex items-center gap-1.5">
              {scenes.map((_, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveSceneIdx(idx)}
                  className={`h-2 rounded-full cursor-pointer transition-all ${
                    idx === activeSceneIdx ? 'w-5 bg-cyan-400 shadow-cyan-glow' : 'w-1.5 bg-white/40'
                  }`}
                />
              ))}
            </div>

            <div className="text-[10px] font-mono text-cyan-300 font-bold bg-cyan-500/20 px-2 py-0.5 rounded border border-cyan-400/30">
              60 FPS
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
