/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
     'rubik':['rubik','sans-serif'],
      'josefin':['"Josefin Sans"','sans-serif'],
    },
    colors:{
      transparent:'transparent',
      'white':'#FFFFFF',
      'gray':{
        50:'#fafafa',
        100:'#e4e5f1',
        200:'#d2d3db',
        300:'#9394a5',
        400:'#484b6a',
      },
      'blue':{
        50:'#cacde8',
        100:'#e4e5f1',
        200:'#777a92',
        300:'#4d5066',
        400:'#393a4c',
        500:'#25273c',
        600:'#161722',
      },
      'secondary':{
        100:'#57ddff',
        200:'#c058f3'
      },
      'bright':{
        100:'hsl(220, 98%, 61%)'
      }

    },
    extend: {},
  },
  plugins: [],
}
