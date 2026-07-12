/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        magical: {
          dark: '#2A0845',
          purple: '#6441A5',
          light: '#B24592',
          glow: '#F15F79'
        }
      },
      fontFamily: {
        sans: ['Fredoka', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
