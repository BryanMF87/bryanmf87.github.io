/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ccYellow: '#FFC802',
        ccDark: '#262521'
      },
      fontFamily: {
        'sans': ['Roboto', 'sans-serif'],
        delicious: ['"Delicious Handrawn"', 'serif']
      },
      fontSize: {
        '10xl': '10rem',
        '11xl': '12rem',
        '12xl': '14rem'
      },
      screens: {
        'xs': '375px',
        'smer': '500px'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

