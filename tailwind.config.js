/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1B4D3E',
        'secondary': '#E5E5E5',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      }
    },
  },
  plugins: [],
} 