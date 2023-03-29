/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    screens : {
      'xxs': '320px',
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
        fill: {
          '0%':{ transform: 'scale(0.8)'},
          '100%':{transform: 'scale(1)'},
      },
      },
      animation: {
        fill: 'fill ease-out 0.4s',

      }
    },
  },
  plugins: [],
}
