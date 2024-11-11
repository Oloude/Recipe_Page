/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Outfit": ['"Outfit"', ...defaultTheme.fontFamily.sans],
        "Young_Serif": ['"Young Serif"', ...defaultTheme.fontFamily.serif],
      },
      colors : {
        "stone100": "#f3e6d8",
        "stone150": "#e4ded8",
        "stone800": "#5f574e",
        "stone900": "#302d2c",
        "brown800": "#854632",
        "rose800": "#7b284f",
        "rose50": "#fff5fa",
      }
    },
  },
  plugins: [],
}