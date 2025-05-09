/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontSize: {
      'xs': '1.125rem',    // Increased from 1rem
      'sm': '1.25rem',     // Increased from 1.125rem
      'base': '1.5rem',    // Increased from 1.25rem
      'lg': '1.875rem',    // Increased from 1.5rem
      'xl': '2.25rem',     // Increased from 1.875rem
      '2xl': '2.75rem',    // Increased from 2.25rem
      '3xl': '3.25rem',    // Increased from 2.75rem
      '4xl': '4rem',       // Increased from 3.5rem
      '5xl': '5rem',       // Increased from 4.25rem
      '6xl': '6rem',       // Increased from 5rem
    },
    extend: {
      colors: {
        primary: {
          50: '#fff1f1',
          100: '#ffe1e1',
          200: '#ffc7c7',
          300: '#ffa0a0',
          400: '#ff6666',
          500: '#ff3131',
          600: '#ff1414',
          700: '#e60000',
          800: '#b30000',
          900: '#910000',
          950: '#4c0000',
        },
        secondary: {
          50: '#fff1f1',
          100: '#ffe1e1',
          200: '#ffc7c7',
          300: '#ffa0a0',
          400: '#ff6666',
          500: '#ff3131',
          600: '#ff1414',
          700: '#e60000',
          800: '#b30000',
          900: '#910000',
          950: '#4c0000',
        },
        accent: {
          50: '#fff1f1',
          100: '#ffe1e1',
          200: '#ffc7c7',
          300: '#ffa0a0',
          400: '#ff6666',
          500: '#ff3131',
          600: '#ff1414',
          700: '#e60000',
          800: '#b30000',
          900: '#910000',
          950: '#4c0000',
        },
        dark: {
          100: '#d1d5db',
          200: '#9ca3af',
          300: '#6b7280',
          400: '#4b5563',
          500: '#374151',
          600: '#1f2937',
          700: '#111827',
          800: '#0f172a',
          900: '#0a0c10',
        },
      },
      fontFamily: {
        sans: ['Vintage Simple', 'serif'],
        mono: ['Vintage Simple', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
};