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
    },
    fontFamily: {
      'sans': ['Roboto', 'sans-serif'],
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

