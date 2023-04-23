/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx', './*.html'],
  theme: {
    extend: {
      colors: {
        primaryColor: '#8873ef',
        headingColor: '#081e21',
        smallTextColor: '#193256',
      },
    },
  },
  plugins: [],
}
