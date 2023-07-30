/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      main: ['Mukta', 'sans-serif']
    },
    extend: {
      width: {
        custom: '40%',
        mobile: '90%'
      }

    },
  },
  plugins: [],
}

