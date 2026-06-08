/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6B21A8", /* Premium Purple */
        secondary: "#9333EA", /* Light Purple */
        dark: "#1e1b4b", /* Deep Purple/Black for text */
        light: "#F8FAFC", /* Off-white for background */
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}