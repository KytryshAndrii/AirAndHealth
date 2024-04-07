/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        '10000': '10000',
        '10010': '10010',
        '10020': '10020'
      },
      colors: {
        "cream-white": "#fff",
        "modal-bg":'rgba(18, 18, 18, 0.4)',
      }

    },
  },
  plugins: [],
}