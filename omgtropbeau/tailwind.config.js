/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'shake' : 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both',
      },
      keyframes: {
        'shake' : {
          '10%': { transform: 'translate3d(-1px, 0, 0)' },
          '90%': { transform: 'translate3d(-1px, 0, 0)' },
          '20%': { transform: 'translate3d(2px, 0, 0)' },
          '80%': { transform: 'translate3d(2px, 0, 0)' },
          '30%': { transform: 'translate3d(-4px, 0, 0)' },
          '50%': { transform: 'translate3d(-4px, 0, 0)' },
          '70%': { transform: 'translate3d(-4px, 0, 0)' },
          '40%': { transform: 'translate3d(4px, 0, 0)' },
          '60%': { transform: 'translate3d(4px, 0, 0)' }
        }
      },
      colors: {
        'admin-gray': '#e5e5e5',
        'admin-light-blue': '#ebf3fe',
        'admin-blue': '#2f80ed',
        'admin-green-blue': '#17c3b2',
        'admin-beige': '#ffcb77',
        'admin-light-beige': '#ffbd00',
        'button-blue': '#227c9d',

      }
    },
  },
  plugins: [],
}