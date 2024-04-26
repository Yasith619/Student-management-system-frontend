/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "Light-white":"#f5f3ff",
        "menu-color":"#1e1b4b",
        "menu-text-color":"#fafafa",
        "m-h-color":"#312e81"
        
      }
    },
  },
  plugins: [],
}

