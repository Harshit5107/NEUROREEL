export interface ReelPromptInput {
  topic: string;
  audience: string;
  duration: string;
  style: string;
  platform: string;
}

export interface ScriptScene {
  sceneNumber: number;
  durationSec: number;
  visualPrompt: string;
  narration: string;
  captionText: string;
  soundEffect: string;
  visualBgGradient: string;
  videoUrl: string;
}

export interface GeneratedReel {
  id: string;
  title: string;
  topic: string;
  audience: string;
  duration: string;
  style: string;
  platform: string;
  viralScore: number;
  scoreBreakdown: {
    hook: number;
    retention: number;
    clarity: number;
    cta: number;
  };
  script: {
    hook: string;
    body: string;
    cta: string;
  };
  scenes: ScriptScene[];
  voiceoverSpeaker: string;
  thumbnailUrl: string;
  estimatedViews: string;
  createdAt: string;
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge: string;
  gradient: string;
}

export interface HowItWorksStep {
  step: string;
  title: string;
  description: string;
  icon: string;
  detail: string;
}
