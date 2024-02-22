/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
      },
      colors: {
        accent: {
          50: '#F3E7F1',
          100: '#E8CFE3',
          200: '#D09FC7',
          300: '#BA73AD',
          400: '#9A4C8C',
          500: '#6A3460',
          600: '#562A4E',
          700: '#41203B',
          800: '#291425',
          900: '#150A13',
          950: '#0A0509',
        },
      },
      fontFamily: {
        sans: '"Open Sans", Helvetica, Arial, sans-serif',
      },
    },
  },
  plugins: [],
};
