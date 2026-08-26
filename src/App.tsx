import React, { useState } from 'react';
import { ParticleBackground } from './components/ParticleBackground';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { HackathonDemoModal } from './components/HackathonDemoModal';
import { HowItWorks } from './components/HowItWorks';
import { AIReelGenerator } from './components/AIReelGenerator';
import { ReelPreviewPhone } from './components/ReelPreviewPhone';
import { AIViralScore } from './components/AIViralScore';
import { AIAnalytics } from './components/AIAnalytics';
import { BeforeAfter } from './components/BeforeAfter';
import { FeaturesGrid } from './components/FeaturesGrid';
import { FloatingOrb } from './components/FloatingOrb';
import { TechArchitecture } from './components/TechArchitecture';
import { StudioDashboard } from './components/StudioDashboard';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

import { ReelPromptInput, GeneratedReel } from './types/reel';
import { HACKATHON_DEMO_REEL } from './data/demoData';

export function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [isStudioMode, setIsStudioMode] = useState(false);
  const [activeReel, setActiveReel] = useState<GeneratedReel>(HACKATHON_DEMO_REEL);

  const handleCustomReelGenerated = (input: ReelPromptInput) => {
    const newReel: GeneratedReel = {
      id: `reel-${Date.now()}`,
      title: input.topic,
      topic: input.topic,
      audience: input.audience,
      duration: input.duration,
      style: input.style,
      platform: input.platform,
      viralScore: 94,
      scoreBreakdown: { hook: 96, retention: 93, clarity: 95, cta: 92 },
      script: {
        hook: `Stop scrolling. Here is how ${input.topic} will transform your workflow.`,
        body: `First key insight for ${input.audience}: automate tedious steps. Second: leverage predictive AI engines.`,
        cta: 'Follow NEUROREEL to master AI video generation today.'
      },
      scenes: [
        {
          sceneNumber: 1,
          durationSec: 5,
          visualPrompt: 'Cybernetic matrix expanding in 3D dark space',
          narration: `Stop scrolling. Here is how ${input.topic} will transform your workflow.`,
          captionText: `⚡ ${input.topic.toUpperCase()}`,
          soundEffect: 'Cyber Riser',
          visualBgGradient: 'from-blue-950 via-cyan-950 to-black',
          videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-screens-and-lines-41547-large.mp4'
        },
        {
          sceneNumber: 2,
          durationSec: 7,
          visualPrompt: 'Glowing neural node network visualization',
          narration: `First key insight for ${input.audience}: automate tedious manual tasks instantly.`,
          captionText: `1. AUTOMATE MANUAL TASKS 🚀`,
          soundEffect: 'Data Pulse',
          visualBgGradient: 'from-cyan-950 via-blue-950 to-black',
          videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-hands-typing-on-a-luminous-keyboard-41549-large.mp4'
        },
        {
          sceneNumber: 3,
          durationSec: 8,
          visualPrompt: '3D AI avatar analyzing real-time data stream',
          narration: `Second: leverage high-velocity predictive neural models.`,
          captionText: `2. PREDICTIVE NEURAL MODELS 🧠`,
          soundEffect: 'Synth Pulse',
          visualBgGradient: 'from-purple-950 via-blue-950 to-black',
          videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-futuristic-robotic-arm-in-a-laboratory-41542-large.mp4'
        },
        {
          sceneNumber: 4,
          durationSec: 5,
          visualPrompt: 'NEUROREEL logo glowing with neon blue particles',
          narration: 'Save this Reel right now and follow NEUROREEL for daily AI updates!',
          captionText: '🔥 SAVE THIS REEL & FOLLOW US!',
          soundEffect: 'Victory Riser',
          visualBgGradient: 'from-cyan-900 via-blue-900 to-black',
          videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-tunnel-of-futuristic-lights-41545-large.mp4'
        }
      ],
      voiceoverSpeaker: 'NEURO AI Voice - Marcus (Energetic)',
      thumbnailUrl: '/assets/neural_head.jpg',
      estimatedViews: '500K - 1.5M',
      createdAt: 'Just now'
    };

    setActiveReel(newReel);
    // Smooth scroll down to generated reel preview
    const previewEl = document.getElementById('generated-reel-preview');
    if (previewEl) {
      previewEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToGenerator = () => {
    setIsStudioMode(false);
    setTimeout(() => {
      const generatorEl = document.getElementById('generator');
      if (generatorEl) {
        generatorEl.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="relative min-h-screen bg-[#02040A] text-white selection:bg-cyan-400 selection:text-black">
      {/* 3D WebGL / Canvas Particle Network Background */}
      <ParticleBackground />

      {/* Futuristic Desktop Custom Cursor */}
      <CustomCursor />

      {/* Top Glassmorphism Navigation Bar */}
      <Navbar
        onOpenDemo={() => setIsDemoModalOpen(true)}
        onOpenStudio={() => setIsStudioMode(!isStudioMode)}
        isStudioMode={isStudioMode}
        onToggleStudioMode={() => setIsStudioMode(!isStudioMode)}
      />

      {/* Main View Conditional Switch */}
      {isStudioMode ? (
        <StudioDashboard onBackToLanding={() => setIsStudioMode(false)} />
      ) : (
        <main className="relative z-10">
          {/* Full Screen Hero Section */}
          <Hero
            onOpenGenerator={scrollToGenerator}
            onOpenDemo={() => setIsDemoModalOpen(true)}
          />

          {/* AI Viral Retention Score Banner */}
          <AIViralScore
            overallScore={activeReel.viralScore}
            breakdown={activeReel.scoreBreakdown}
          />

          {/* How It Works (6 Floating 3D Cards) */}
          <HowItWorks />

          {/* Interactive AI Reel Generator Form & Pipeline Modal */}
          <AIReelGenerator onReelGenerated={handleCustomReelGenerated} />

          {/* Generated Reel Preview Section */}
          <section id="generated-reel-preview" className="py-24 px-4 sm:px-8">
            <div className="max-w-6xl mx-auto space-y-12">
              <div className="text-center space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border-cyan-400/30 text-cyan-300 text-xs font-mono font-bold uppercase tracking-widest">
                  <span>GENERATED REEL VIDEO OUTPUT</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
                  Interactive 9:16 Vertical Video Player
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 font-mono">
                  "{activeReel.title}"
                </p>
              </div>

              <div className="flex justify-center">
                <ReelPreviewPhone reel={activeReel} />
              </div>
            </div>
          </section>

          {/* AI Telemetry & Retention Analytics */}
          <AIAnalytics />

          {/* Prompt Transformation Side-by-Side */}
          <BeforeAfter />

          {/* 6 Feature Cards Grid */}
          <FeaturesGrid />

          {/* Floating Neural Orb Interstitial */}
          <FloatingOrb />

          {/* Technology & Architecture Section */}
          <TechArchitecture />

          {/* Converging Particles Final CTA */}
          <FinalCTA onOpenGenerator={scrollToGenerator} />

          {/* Footer */}
          <Footer onOpenStudio={() => setIsStudioMode(true)} />
        </main>
      )}

      {/* Hackathon Judge Demo Showcase Modal */}
      <HackathonDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        onLaunchStudio={() => {
          setIsDemoModalOpen(false);
          setIsStudioMode(true);
        }}
      />
    </div>
  );
}
