/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        sweep: {
          '0%': { transform: 'translateX(-150%)' },
          '50%': { transform: 'translateX(150%)' },
          '100%': { transform: 'translateX(150%)' },
        }
      },
      animation: {
        sweep: 'sweep 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}