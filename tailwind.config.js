/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      transitionProperty: {
        height: 'height',
      },
      colors: {
        primary: {
          blue: '#1a1a3a',
          red: '#991b1b',
          yellow: '#eab308',
        },
      },
    },
  },
  plugins: [],
};