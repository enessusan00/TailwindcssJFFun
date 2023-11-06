const plugin = require('tailwindcss/plugin')
const rotateX = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-x-20': {
      transform: 'rotateX(-45deg) rotateY(-25deg) rotateZ(-30deg)',
    },
    '.rotate-x-40': {
      transform: 'rotateX(40deg) rotateY(40deg)',
    },
    '.rotate-x-60': {
      transform: 'rotateX(60deg) rotateY(60deg)',
    },
    '.rotate-x-80': {
      transform: 'rotateX(80deg) rotateY(80deg)',
    },
  })
})



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [rotateX],
}
