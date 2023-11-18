/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'Poppins': 'Poppins',
        'Inter': 'Inter',
      },
      colors: {
        primary: '#14b8a6',
        secondary: '#64748b',
      },
      width: {
        'tab-img': '40rem',
      }
    },
  },
  plugins: [],
}

