import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Wand2, Users, Clock, Palette, Share2, MessageSquare, ArrowRight } from 'lucide-react';
import { ReelPromptInput } from '../types/reel';
import { GenerationPipelineModal } from './GenerationPipelineModal';

interface AIReelGeneratorProps {
  onReelGenerated: (input: ReelPromptInput) => void;
}

export const AIReelGenerator: React.FC<AIReelGeneratorProps> = ({ onReelGenerated }) => {
  const [topic, setTopic] = useState('Explain artificial intelligence to college students in 30 seconds');
  const [audience, setAudience] = useState('College Students');
  const [duration, setDuration] = useState('30 sec');
  const [style, setStyle] = useState('Viral Educational');
  const [platform, setPlatform] = useState('Instagram');
  const [isGeneratingModalOpen, setIsGeneratingModalOpen] = useState(false);

  const audiences = ['College Students', 'Creators', 'Entrepreneurs', 'Developers', 'General Audience'];
  const durations = ['15 sec', '30 sec', '45 sec', '60 sec'];
  const styles = ['Cinematic', 'Educational', 'Viral Educational', 'Storytelling', 'Professional', 'Funny', 'Motivational'];
  const platforms = ['Instagram', 'YouTube Shorts', 'TikTok', 'LinkedIn'];

  const sampleIdeas = [
    '5 AI Skills Every College Student Should Learn',
    'How Quantum Computing Will Change Everything',
    '3 Secret Productivity Hacks for Startup Founders',
    'Why Coding Will Look Completely Different in 2027',
  ];

  const handleGenerate = () => {
    if (!topic.trim()) return;
    setIsGeneratingModalOpen(true);
  };

  const handlePipelineComplete = () => {
    setIsGeneratingModalOpen(false);
    onReelGenerated({
      topic,
      audience,
      duration,
      style,
      platform,
    });
  };

  return (
    <section id="generator" className="relative py-28 px-4 sm:px-8">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border-cyan-400/30 text-cyan-300 text-xs font-mono tracking-widest uppercase shadow-cyan-glow">
            <Wand2 className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
            <span>INTERACTIVE STUDIO GENERATOR</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            YOUR IDEA. <span className="text-electric-gradient">OUR AI.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal">
            Input your prompt below and watch NEUROREEL engineer script, scenes, voiceover, and kinetic captions.
          </p>
        </div>

        {/* Generator Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel-glow rounded-3xl p-6 sm:p-10 border-cyan-400/30 shadow-[0_0_60px_rgba(0,240,255,0.15)] space-y-8"
        >
          {/* Topic Input Textarea */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold text-white font-mono uppercase tracking-wider flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                <span>Topic / Video Prompt</span>
              </label>
              <span className="text-xs text-slate-400 font-mono">STEP 1 OF 5</span>
            </div>

            <textarea
              rows={3}
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="What do you want your Reel about? (e.g., Explain artificial intelligence to college students)"
              className="w-full bg-black/60 rounded-2xl p-4 border border-cyan-500/30 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-sans text-base resize-none shadow-inner"
            />

            {/* Quick Sample Chips */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="text-xs text-slate-400 font-mono flex items-center">Try prompt:</span>
              {sampleIdeas.map((idea) => (
                <button
                  key={idea}
                  type="button"
                  onClick={() => setTopic(idea)}
                  className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 hover:bg-cyan-500/20 border border-white/10 hover:border-cyan-400/40 text-slate-300 hover:text-cyan-300 transition-all"
                >
                  "{idea}"
                </button>
              ))}
            </div>
          </div>

          {/* Configuration Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Target Audience Dropdown */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 font-mono uppercase tracking-wider flex items-center gap-2">
                <Users className="w-3.5 h-3.5 text-blue-400" />
                <span>Target Audience</span>
              </label>
              <select
                value={audience}
                onChange={(e) => setAudience(e.target.value)}
                className="w-full bg-black/60 rounded-xl p-3 border border-white/15 text-white focus:outline-none focus:border-cyan-400 font-sans text-sm"
              >
                {audiences.map((aud) => (
                  <option key={aud} value={aud} className="bg-[#02040A] text-white">
                    {aud}
                  </option>
                ))}
              </select>
            </div>

            {/* Reel Duration Options */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 font-mono uppercase tracking-wider flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>Reel Duration</span>
              </label>
              <div className="grid grid-cols-4 gap-2">
                {durations.map((dur) => (
                  <button
                    key={dur}
                    type="button"
                    onClick={() => setDuration(dur)}
                    className={`py-2 rounded-xl text-xs font-mono font-bold transition-all border ${
                      duration === dur
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-cyan-glow'
                        : 'bg-black/40 border-white/10 text-slate-400 hover:border-white/30'
                    }`}
                  >
                    {dur}
                  </button>
                ))}
              </div>
            </div>

            {/* Content Style Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 font-mono uppercase tracking-wider flex items-center gap-2">
                <Palette className="w-3.5 h-3.5 text-purple-400" />
                <span>Visual & Script Style</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {styles.map((sty) => (
                  <button
                    key={sty}
                    type="button"
                    onClick={() => setStyle(sty)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${
                      style === sty
                        ? 'bg-blue-600/30 border-blue-400 text-blue-300 shadow-blue-glow'
                        : 'bg-black/40 border-white/10 text-slate-400 hover:border-white/30'
                    }`}
                  >
                    {sty}
                  </button>
                ))}
              </div>
            </div>

            {/* Target Platform Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 font-mono uppercase tracking-wider flex items-center gap-2">
                <Share2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Target Social Platform</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                {platforms.map((plat) => (
                  <button
                    key={plat}
                    type="button"
                    onClick={() => setPlatform(plat)}
                    className={`py-2 px-3 rounded-xl text-xs font-mono font-semibold transition-all border flex items-center justify-center gap-1.5 ${
                      platform === plat
                        ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.3)]'
                        : 'bg-black/40 border-white/10 text-slate-400 hover:border-white/30'
                    }`}
                  >
                    <span>{plat}</span>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Primary Submit Button */}
          <div className="pt-4">
            <button
              onClick={handleGenerate}
              className="w-full py-5 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 bg-[length:200%_auto] text-white font-extrabold text-lg shadow-cyan-glow hover:shadow-electric-glow hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-3 uppercase tracking-wider font-display"
            >
              <Sparkles className="w-6 h-6 text-white animate-pulse" />
              <span>GENERATE REEL ✦</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Generation Pipeline Modal Overlay */}
      <GenerationPipelineModal
        isOpen={isGeneratingModalOpen}
        input={{ topic, audience, duration, style, platform }}
        onComplete={handlePipelineComplete}
      />
    </section>
  );
};
