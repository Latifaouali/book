/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
        colors: {
          ...colors,
          background:'#d5eafe',
          primary:'#743820',
          secondary:'#000000',
          text:'#332941',
          button:'#743820'
        },
        fontFamily: {
          display: ['Playfair Display', 'serif'],
        },
    },
  },
  plugins: [],
}

