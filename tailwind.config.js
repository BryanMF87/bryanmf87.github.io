/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '540px',
    },
    extend: {
      colors: {
        ccHighlight: '#FF1B6B', // hot pink
        ccOffBlack: '#171717',
        ccOffWhite: '#f5f5f5',
        ccGray: '#999',
        ccGray2: '#444',
        ccGray3: '#212121',
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      maxWidth: {
        '8xl': '1440px',
        '9xl': '1920px'
      },
    },
  },
  plugins: [],
}