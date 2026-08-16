/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        maroon: {
          50: '#fdf2f4',
          100: '#fce7eb',
          200: '#f9d2db',
          300: '#f4adc0',
          400: '#BE5103', // Burnt Orange highlight
          500: '#A52A2A', // Crimson / Brown-red
          600: '#800020', // Burgundy (Primary)
          700: '#800020', // Burgundy
          800: '#630018',
          900: '#470011',
          950: '#2b000a',
        },
        gold: {
          400: '#ffd84d',
          500: '#FFCE1B', // Bright Gold / Yellow
          600: '#e6b500',
        },
        burnt: {
          400: '#d45e0d',
          500: '#BE5103', // Burnt Orange
          600: '#a34300',
        },
        crimson: {
          400: '#b83b3b',
          500: '#A52A2A', // Deep Red / Crimson
          600: '#8a2020',
        },
        slate: {
          950: '#0b0d12',
          900: '#12151e',
          850: '#181c27',
          800: '#202636',
        }
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'orb-slow': 'orbGlow 10s ease-in-out infinite alternate',
        'orb-reverse': 'orbGlowReverse 12s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blink': 'blink 1s step-end infinite',
      },
      keyframes: {
        orbGlow: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(30px, -40px) scale(1.15)' },
          '100%': { transform: 'translate(-20px, 20px) scale(0.95)' },
        },
        orbGlowReverse: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '50%': { transform: 'translate(-40px, 30px) scale(1.2)' },
          '100%': { transform: 'translate(25px, -25px) scale(0.9)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.8, boxShadow: '0 0 15px rgba(128, 0, 32, 0.4)' },
          '50%': { opacity: 1, boxShadow: '0 0 30px rgba(128, 0, 32, 0.8)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        }
      }
    },
  },
  plugins: [],
}
