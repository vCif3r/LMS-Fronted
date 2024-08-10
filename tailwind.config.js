/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'background-light': 'whitesmoke',
        'background-dark': '#151515' // Color oscuro de fondo
      }
    },
  },
  plugins: [],
}