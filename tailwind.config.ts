import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#030303',
        card: 'rgba(255,255,255,0.06)',
        border: 'rgba(255,255,255,0.12)',
        accent: '#31d0ff',
        accent2: '#5bff98'
      },
      boxShadow: {
        glow: '0 0 40px rgba(49, 208, 255, 0.2)'
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at 30% 20%, rgba(49,208,255,0.18), transparent 40%), radial-gradient(circle at 80% 10%, rgba(91,255,152,0.12), transparent 30%)'
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        pulseSlow: 'pulseSlow 6s ease-in-out infinite',
        gridShift: 'gridShift 18s linear infinite',
        fadeUp: 'fadeUp 0.8s ease both'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.45' },
          '50%': { opacity: '0.9' }
        },
        gridShift: {
          '0%': { backgroundPosition: '0 0, 0 0' },
          '100%': { backgroundPosition: '90px 90px, 30px 30px' }
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: []
};

export default config;
