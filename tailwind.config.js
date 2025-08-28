/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Dark mode enable
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#14b8a6', // Example green
        secondary: '#0ea5e9', // Example blue
      },
    },
  },
  plugins: [],
}
