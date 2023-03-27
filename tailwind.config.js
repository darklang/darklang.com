/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    screens : {
      'xs': '375px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      body: ['Inter', "sans-serif"],
    },
    extend: {
      colors: {
        'pink': '#F56FF0',
        'purple': '#939BFF',
        'background': '#050407',
        'magenta': '#C56AE4',
      },
      keyframes: {
        borderSpin: {
          '100%': { transform: 'rotate(-360deg)' },
        }
      },
      animation: {
        borderSpin: 'borderSpin 3s linear infinite',
      }
    },
  },
  plugins: [],
}
