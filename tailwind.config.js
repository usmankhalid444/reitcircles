/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
       'darkblue': '#072144',
      'lightblue': '#00A3FE',
      'mediumgray': 'rgba(255, 255, 255, 0.25)',
      
  },
   fontFamily: {
        'sans': [' metropolis, Arial, sans-serif'],
         'metropolis-italic': [' metropolis-italic, Arial, sans-serif'],
      },
    },
  },
  plugins: [],
}
