/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'admin-gray': '#e5e5e5',
        'admin-light-blue': '#ebf3fe',
        'admin-blue': '#2f80ed',
      }
    },
  },
  plugins: [],
}