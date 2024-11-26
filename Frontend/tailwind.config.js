/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customGray: 'rgb(148, 163, 184)',
      },
    },
  },
  plugins: [],
}

