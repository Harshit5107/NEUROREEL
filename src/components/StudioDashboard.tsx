import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, PlusCircle, Video, FileText, BarChart2, Layers, Settings, 
  Sparkles, Play, Pause, Volume2, Music, Type, Sliders, ArrowLeft, Download, Share2, Award
} from 'lucide-react';
import { RECENT_COMMUNITY_REELS, HACKATHON_DEMO_REEL } from '../data/demoData';
import { ReelPreviewPhone } from './ReelPreviewPhone';

interface StudioDashboardProps {
  onBackToLanding: () => void;
}

export const StudioDashboard: React.FC<StudioDashboardProps> = ({ onBackToLanding }) => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'editor' | 'my-reels'>('dashboard');
  const [selectedReel, setSelectedReel] = useState(HACKATHON_DEMO_REEL);
  const [activeTimelineScene, setActiveTimelineScene] = useState(0);

  return (
    <div className="min-h-screen bg-[#02040A] text-white flex flex-col pt-20">
      
      {/* Top Studio Bar */}
      <div className="bg-[#0A101E]/90 border-b border-cyan-500/20 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button
            onClick={onBackToLanding}
            className="flex items-center gap-2 text-xs font-mono text-cyan-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Showcase View</span>
          </button>
          <div className="h-4 w-[1px] bg-white/20" />
          <span className="text-sm font-bold font-display text-white">
            NEUROREEL CREATOR STUDIO
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveTab('editor')}
            className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-blue-glow"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Create New Reel</span>
          </button>
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        
        {/* Left Sidebar Navigation */}
        <aside className="w-64 bg-[#050914] border-r border-cyan-500/15 p-4 space-y-6 hidden md:block">
          <div className="space-y-1">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-mono font-bold transition-all ${
                activeTab === 'dashboard'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-cyan-glow'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Dashboard</span>
            </button>

            <button
              onClick={() => setActiveTab('editor')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-mono font-bold transition-all ${
                activeTab === 'editor'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-cyan-glow'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Video className="w-4 h-4" />
              <span>AI Video Studio</span>
            </button>

            <button
              onClick={() => setActiveTab('my-reels')}
              className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-mono font-bold transition-all ${
                activeTab === 'my-reels'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-cyan-glow'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>My Reels Library</span>
            </button>

            <div className="pt-4 border-t border-white/5 space-y-1">
              <span className="text-[10px] font-mono text-slate-500 uppercase px-3">TOOLS</span>
              <div className="flex items-center gap-3 px-3.5 py-2 text-xs text-slate-400 hover:text-white cursor-pointer">
                <FileText className="w-4 h-4" />
                <span>AI Script Engine</span>
              </div>
              <div className="flex items-center gap-3 px-3.5 py-2 text-xs text-slate-400 hover:text-white cursor-pointer">
                <BarChart2 className="w-4 h-4" />
                <span>Virality Telemetry</span>
              </div>
              <div className="flex items-center gap-3 px-3.5 py-2 text-xs text-slate-400 hover:text-white cursor-pointer">
                <Settings className="w-4 h-4" />
                <span>Studio Settings</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-6 bg-[#02040A]">
          
          {/* TAB 1: DASHBOARD VIEW */}
          {activeTab === 'dashboard' && (
            <div className="max-w-6xl mx-auto space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                  Good morning, <span className="text-electric-gradient">Creator.</span>
                </h2>
                <p className="text-xs text-slate-400 font-mono mt-1">
                  NEUROREEL Engine v4.2 • GPU Inference Status: OPTIMAL
                </p>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 font-mono">
                <div className="glass-panel p-5 rounded-2xl border-cyan-400/20">
                  <span className="text-xs text-slate-400 block uppercase">REELS CREATED</span>
                  <span className="text-2xl font-extrabold text-white">42</span>
                  <span className="text-[10px] text-cyan-400 block mt-1">+8 this week</span>
                </div>
                <div className="glass-panel p-5 rounded-2xl border-blue-400/20">
                  <span className="text-xs text-slate-400 block uppercase">TOTAL VIEWS</span>
                  <span className="text-2xl font-extrabold text-cyan-300">2.4M</span>
                  <span className="text-[10px] text-emerald-400 block mt-1">↑ 18.4% retention</span>
                </div>
                <div className="glass-panel p-5 rounded-2xl border-purple-400/20">
                  <span className="text-xs text-slate-400 block uppercase font-mono">AVG AI SCORE</span>
                  <span className="text-2xl font-extrabold text-purple-300">93.8</span>
                  <span className="text-[10px] text-purple-400 block mt-1">TIER S+</span>
                </div>
                <div className="glass-panel p-5 rounded-2xl border-emerald-400/20">
                  <span className="text-xs text-slate-400 block uppercase">ENGAGEMENT RATE</span>
                  <span className="text-2xl font-extrabold text-emerald-300">14.2%</span>
                  <span className="text-[10px] text-emerald-400 block mt-1">3x industry avg</span>
                </div>
              </div>

              {/* Recent Reels Grid */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold font-display text-white">
                    Recent Generated Reels
                  </h3>
                  <button
                    onClick={() => setActiveTab('my-reels')}
                    className="text-xs font-mono text-cyan-400 hover:underline"
                  >
                    View All →
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {RECENT_COMMUNITY_REELS.map((reelItem) => (
                    <div
                      key={reelItem.id}
                      onClick={() => {
                        setSelectedReel(reelItem);
                        setActiveTab('editor');
                      }}
                      className="glass-panel rounded-2xl p-4 border-white/10 hover:border-cyan-400/50 cursor-pointer transition-all group space-y-3"
                    >
                      <div className="relative aspect-[9/16] rounded-xl overflow-hidden bg-gradient-to-tr from-cyan-950 to-blue-900 flex items-center justify-center">
                        <img
                          src={reelItem.thumbnailUrl}
                          alt={reelItem.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <div className="w-10 h-10 rounded-full bg-cyan-500/80 border border-white text-white flex items-center justify-center shadow-cyan-glow group-hover:scale-110 transition-transform">
                            <Play className="w-5 h-5 fill-white ml-0.5" />
                          </div>
                        </div>
                        <span className="absolute top-2 right-2 px-2 py-0.5 rounded bg-black/70 text-cyan-300 font-mono text-[10px] border border-cyan-400/30 font-bold">
                          {reelItem.viralScore}/100
                        </span>
                      </div>

                      <div>
                        <h4 className="text-sm font-bold text-white line-clamp-1 group-hover:text-cyan-300 transition-colors font-display">
                          {reelItem.title}
                        </h4>
                        <p className="text-xs text-slate-400 font-mono mt-0.5">
                          {reelItem.duration} • {reelItem.platform}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2 & 3: FULL AI VIDEO CREATION STUDIO & TIMELINE EDITOR */}
          {(activeTab === 'editor' || activeTab === 'my-reels') && (
            <div className="max-w-7xl mx-auto space-y-6">
              
              {/* Top Studio Controls Bar */}
              <div className="glass-panel p-4 rounded-2xl border-cyan-400/30 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 font-mono text-xs font-bold border border-cyan-400/30">
                    ACTIVE PROJECT
                  </span>
                  <h3 className="text-lg font-bold font-display text-white">
                    {selectedReel.title}
                  </h3>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono">
                  <button className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-slate-200 flex items-center gap-1.5">
                    <Share2 className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Share</span>
                  </button>
                  <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold shadow-blue-glow flex items-center gap-1.5">
                    <Download className="w-3.5 h-3.5" />
                    <span>Export 1080p MP4</span>
                  </button>
                </div>
              </div>

              {/* Studio Workspace Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Left Column: Script & Scene Beat Controls */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="glass-panel p-5 rounded-2xl border-white/10 space-y-4">
                    <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      <span>Script Scene Beats</span>
                    </h4>

                    <div className="space-y-3 max-h-[380px] overflow-y-auto pr-1">
                      {selectedReel.scenes.map((scene, idx) => (
                        <div
                          key={idx}
                          onClick={() => setActiveTimelineScene(idx)}
                          className={`p-3 rounded-xl border transition-all cursor-pointer ${
                            idx === activeTimelineScene
                              ? 'bg-cyan-500/15 border-cyan-400 text-white'
                              : 'bg-black/40 border-white/5 text-slate-400 hover:border-white/20'
                          }`}
                        >
                          <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                            <span className="font-bold text-cyan-300">SCENE {idx + 1}</span>
                            <span>{scene.durationSec}s</span>
                          </div>
                          <p className="text-xs font-medium text-slate-200 line-clamp-2">
                            {scene.captionText}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* AI Track Settings */}
                  <div className="glass-panel p-5 rounded-2xl border-white/10 space-y-3 font-mono text-xs">
                    <h4 className="font-bold text-slate-300 uppercase">AI Voiceover Track</h4>
                    <div className="bg-black/50 p-3 rounded-xl border border-white/5 flex items-center justify-between">
                      <span className="text-slate-300">{selectedReel.voiceoverSpeaker}</span>
                      <span className="text-cyan-400">HQ 48kHz</span>
                    </div>
                  </div>
                </div>

                {/* Center Column: 9:16 Video Canvas Preview */}
                <div className="lg:col-span-8 space-y-6">
                  <div className="glass-panel-glow p-6 rounded-3xl border-cyan-400/30 flex justify-center">
                    <ReelPreviewPhone reel={selectedReel} />
                  </div>

                  {/* Multi-Track Interactive Video Timeline */}
                  <div className="glass-panel p-5 rounded-2xl border-white/10 space-y-4 font-mono">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-cyan-300 flex items-center gap-2">
                        <Sliders className="w-4 h-4" />
                        <span>VIDEO TIMELINE EDITOR</span>
                      </span>
                      <span className="text-slate-400">30.0 SECONDS TOTAL</span>
                    </div>

                    {/* Timeline Scene Blocks Track */}
                    <div className="grid grid-cols-5 gap-2 pt-2">
                      {selectedReel.scenes.map((scene, idx) => (
                        <div
                          key={idx}
                          onClick={() => setActiveTimelineScene(idx)}
                          className={`p-2.5 rounded-xl border text-center cursor-pointer transition-all ${
                            idx === activeTimelineScene
                              ? 'bg-cyan-500/25 border-cyan-400 text-cyan-300 shadow-cyan-glow'
                              : 'bg-black/50 border-white/10 text-slate-400 hover:border-white/30'
                          }`}
                        >
                          <span className="text-[10px] font-bold block">BEAT {idx + 1}</span>
                          <span className="text-[9px] text-slate-400">{scene.durationSec}s</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

        </main>
      </div>

    </div>
  );
};
