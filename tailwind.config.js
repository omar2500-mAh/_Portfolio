/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#050505',
          50: '#f5f5f5',
          100: '#e5e5e5',
          800: '#111111',
          900: '#050505',
          950: '#000000',
        },
        charcoal: {
          DEFAULT: '#0d0d0d',
          light: '#181818',
        },
        gold: {
          DEFAULT: '#c9c9c9',
          light: '#ffffff',
          dark: '#8a8a8a',
          soft: '#e5e5e5',
        },
        cream: {
          DEFAULT: '#f6f6f6',
          soft: '#ffffff',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        serif: ['"Fraunces"', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-gradient': 'linear-gradient(135deg, #ffffff 0%, #c9c9c9 50%, #8a8a8a 100%)',
        'navy-gradient': 'linear-gradient(160deg, #000000 0%, #0d0d0d 50%, #181818 100%)',
        'mesh': 'radial-gradient(at 20% 20%, rgba(255,255,255,0.07) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(201,201,201,0.05) 0px, transparent 50%), radial-gradient(at 0% 80%, rgba(24,24,24,0.7) 0px, transparent 50%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.65)',
        'gold-glow': '0 0 24px -4px rgba(255, 255, 255, 0.28)',
        'soft': '0 10px 40px -12px rgba(0, 0, 0, 0.5)',
        'soft-light': '0 10px 40px -15px rgba(0, 0, 0, 0.35)',
        'elevate': '0 24px 50px -12px rgba(0, 0, 0, 0.85)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'gradient': 'gradient 8s ease infinite',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.75' },
        },
      },
    },
  },
  plugins: [],
}