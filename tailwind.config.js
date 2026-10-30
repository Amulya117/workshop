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
        carbon: {
          950: '#090d12',
          900: '#0d1117',
          800: '#161b22',
          700: '#21262d',
          600: '#30363d',
        },
        cyber: {
          emerald: '#10b981',
          'emerald-glow': '#059669',
          'emerald-light': '#34d399',
          lime: '#a3e635',
          'lime-bright': '#bef264',
          'lime-dark': '#84cc16',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'neon-emerald': '0 0 20px -3px rgba(16, 185, 129, 0.45), 0 0 8px -2px rgba(16, 185, 129, 0.3)',
        'neon-emerald-lg': '0 0 35px -5px rgba(16, 185, 129, 0.6), 0 0 15px -2px rgba(163, 230, 53, 0.4)',
        'neon-lime': '0 0 20px -3px rgba(163, 230, 53, 0.45)',
        'glass-nav': '0 8px 32px 0 rgba(0, 0, 0, 0.5), inset 0 0 0 1px rgba(16, 185, 129, 0.12)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'radar-ping': 'radarPing 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'subtle-float': 'subtleFloat 6s ease-in-out infinite',
      },
      keyframes: {
        radarPing: {
          '0%': { transform: 'scale(1)', opacity: '0.8' },
          '75%, 100%': { transform: 'scale(2.4)', opacity: '0' },
        },
        subtleFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}

