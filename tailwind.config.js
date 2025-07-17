/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        odgreen: '#7A9C45', 
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}

