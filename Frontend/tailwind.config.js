/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        light: {
          primary: '#ffffff',
          secondary: '#f3f4f6',
          text: '#1f2937',
        },
        dark: {
          primary: '#1f2937',
          secondary: '#111827',
          text: '#f3f4f6',
        },
        google: {
          light: {
            bg: '#FFFFFF',
            border: '#747775',
            text: '#1F1F1F'
          },
          dark: {
            bg: '#131314',
            border: '#8E918F',
            text: '#E3E3E3'
          },
          neutral: {
            bg: '#F2F2F2',
            text: '#1F1F1F'
          }
        }
      },
      fontFamily: {
        'sans': ['your_main_font'],
        'roboto': ['Roboto-Medium', 'sans-serif'],
      },
      fontSize: {
        'google': ['14px', '20px'],
      },
    }
  },
  plugins: [],
}

