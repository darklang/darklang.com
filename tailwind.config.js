/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    fontFamily: {
      body: ['Inter', "sans-serif"],
      'League-Gothic': ['League Gothic', 'sans-serif'],
      'Assistant': ['Assistant', 'sans-serif'],
      'Quicksand': ['Quicksand', 'sans-serif']
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
    extend: {
      colors: {
        'light-background': '#F1F1F1',
        'purple': '#955B9F',
        'blue': '#747AB9',
        'dark-charcoal': '#333333',
      },
      flex: {
        '2': '2 2 0%'
      }
    },
  },
  plugins: [],
}
