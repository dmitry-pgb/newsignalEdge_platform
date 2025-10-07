/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#f97316',
          dark: '#ea580c',
          light: '#fb923c',
        },
        accent: {
          orange: '#f97316',
          cyan: '#06b6d4',
          purple: '#a855f7',
          pink: '#ec4899',
          gold: '#fbbf24',
        },
      },
    },
  },
  plugins: [],
};


