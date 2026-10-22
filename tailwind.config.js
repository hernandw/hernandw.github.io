/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // <--- Añade esta línea obligatoria
  theme: {
    extend: {},
  },
  plugins: [],
}