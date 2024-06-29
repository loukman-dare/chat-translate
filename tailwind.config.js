/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#4697ff',
        secondary:"#dae9ff",
        third:"#f0f0f0",
        text1:"#3c4554",
        text2:"#9c9c9c"
      }
    },
  },
  plugins: [],
}