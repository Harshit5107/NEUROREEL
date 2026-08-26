import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isHoveredButton, setIsHoveredButton] = useState(false);
  const [isHoveredCard, setIsHoveredCard] = useState(false);
  const [isHoveredHead, setIsHoveredHead] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if device is touch based
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isButton = !!target.closest('button, a, select, input, textarea');
      const isCard = !!target.closest('.glass-panel, .glass-panel-glow');
      const isHead = !!target.closest('.group');

      setIsHoveredButton(isButton);
      setIsHoveredCard(isCard && !isButton);
      setIsHoveredHead(isHead);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (isTouchDevice) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Small Glowing Electric Blue Dot */}
      <div
        className="fixed w-3 h-3 rounded-full bg-cyan-400 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_15px_#00F0FF] transition-transform duration-75"
        style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
      />

      {/* Expanding Outer Ring */}
      <div
        className={`fixed rounded-full border border-cyan-400/50 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 flex items-center justify-center ${
          isHoveredButton
            ? 'w-12 h-12 bg-cyan-500/20 scale-125 border-cyan-300 shadow-cyan-glow'
            : isHoveredCard
            ? 'w-14 h-14 bg-blue-500/10 border-blue-400/40'
            : 'w-8 h-8 opacity-40'
        }`}
        style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
      >
        {isHoveredHead && (
          <span className="text-[8px] font-mono font-bold text-cyan-300 tracking-tighter uppercase animate-pulse">
            EXPLORE AI
          </span>
        )}
      </div>
    </div>
  );
};
