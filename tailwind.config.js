/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./build/*.html",
    "./build/pages/*.html"
  ],
  theme: {
    extend: {
      colors:{
        "pt-primary": "#3399FF",
      },
    },
    fontFamily: {
      Manrope: ["Manrope, sans-serif"],
    },
  },
  plugins: [],
}


