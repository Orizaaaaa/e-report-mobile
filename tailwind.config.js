/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",


  ],
  presets: [require("nativewind/preset")],
  theme: {
    fontFamily: {
      satoshi: ["Satoshi", "sans-serif"],
    },
    screens: {
      "2xsm": "375px",
      xsm: "425px",
      "3xl": "2000px",
      ...defaultTheme.screens,
    },
    extend: {
      textColors: {
        primary: '#102E50',
        secondary: '#1B1E28'
      },
      fontFamily: {
        Geometric: ['Geometric', 'sans-serif'],
        Inter: ['Inter', 'sans-serif'],
        Gil: ['Gil', 'sans-serif'],
      },
      backgroundColor: {
        primary: '#102E50',
        light: '#F7F7F9'
      },
      borderColor: {
        primary: '#102E50',
      },
      colors: {
        primary: '#102E50',
        secondary: '#1B1E28'
      }
    },
  },
  plugins: [],
}
