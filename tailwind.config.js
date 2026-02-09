/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "primary": "#e5242a",
        "background-light": "#ffffff",
        "background-dark": "#211111",
        "surface-light": "#f7f7f7",
        "surface-dark": "#2a1d1d",
        vibes: {
          red: '#C41E22',
          black: '#1A1A1A',
          white: '#FFFFFF',
          gray: '#F4F4F4'
        }
      },
      fontFamily: {
        "display": ["Plus Jakarta Sans", "sans-serif"],
        "gothic": ["Pirata One", "serif"],
        "serif": ["Instrument Serif", "serif"],
        "sans": ["Plus Jakarta Sans", "sans-serif"],
        "accent": ["Playfair Display", "serif"],
      },
      boxShadow: {
        "levitate": "0 10px 40px -10px rgba(0,0,0,0.08)",
        "levitate-hover": "0 20px 50px -10px rgba(229, 36, 42, 0.15)",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
};
