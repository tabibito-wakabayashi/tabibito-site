import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          white: '#FFFFFF',
          sky: '#5BA5CB',
          'sky-light': '#8EC6E0',
          'sky-dark': '#3D87AB',
          sunset: '#D8794B',
          'sunset-light': '#E89670',
          'sunset-dark': '#B55F33',
          ink: '#1A2B3A',
          cream: '#FBF7F2',
          mist: '#F3F7FA',
        },
      },
      fontFamily: {
        sans: ['var(--font-noto-sans-jp)', 'system-ui', 'sans-serif'],
        display: ['var(--font-zen-kaku)', 'var(--font-noto-sans-jp)', 'sans-serif'],
        en: ['var(--font-space-grotesk)', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'marquee-slow': 'marquee 60s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out infinite 1s',
        'spin-slow': 'spin 20s linear infinite',
        'gradient-x': 'gradient-x 8s ease infinite',
        'blob': 'blob 14s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #FFFFFF 0%, #E8F2F8 35%, #5BA5CB 70%, #D8794B 100%)',
        'sunset-gradient': 'linear-gradient(135deg, #5BA5CB 0%, #D8794B 100%)',
        'sky-gradient': 'linear-gradient(135deg, #8EC6E0 0%, #5BA5CB 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
