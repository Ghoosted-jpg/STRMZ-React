/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        aileron: ['Aileron', 'sans-serif'],
        anton: ['Anton', 'sans-serif'],
      },
      screens: {  // <-- Moved to root of `extend`
        'xs': '425px',
        'xxl': '1450px'
      },
      opacity: {
        '18': '0.18',
      }
    },
  },
  plugins: [],
};