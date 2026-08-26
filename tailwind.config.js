/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neuro: {
          bg: '#02040A',
          card: 'rgba(10, 16, 30, 0.6)',
          border: 'rgba(56, 189, 248, 0.15)',
          blue: '#0070F3',
          electric: '#00F0FF',
          cyan: '#00F5FF',
          accent: '#7928CA',
          dimText: '#94A3B8',
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      boxShadow: {
        'electric-glow': '0 0 35px -5px rgba(0, 240, 255, 0.3)',
        'blue-glow': '0 0 30px -5px rgba(0, 112, 243, 0.4)',
        'cyan-glow': '0 0 25px 0 rgba(0, 245, 255, 0.4)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glowPulse: {
          '0%': { boxShadow: '0 0 15px rgba(0, 240, 255, 0.2)' },
          '100%': { boxShadow: '0 0 35px rgba(0, 240, 255, 0.6)' },
        }
      }
    },
  },
  plugins: [],
}
