/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        csGreen: '#8AC926',
        csYellow: '#FFCA3A',
        csRed: '#FF595E',
        csBlue: '#1982C4',
        csPurple: '#6A4C93',
      }
    },
  },
  plugins: [],
}

