/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    fontFamily: {
      body: ["Inter", "sans-serif"],
      "League-Gothic": ["League Gothic", "sans-serif"],
      Assistant: ["Assistant", "sans-serif"],
      Quicksand: ["Quicksand", "sans-serif"],
      FiraCode: ["Fira Code", "monospace"],
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
      square: "square",
      roman: "upper-roman",
    },
    extend: {
      colors: {
        "light-background": "#FAFAFA",
        purple: "#955B9F",
        blue: "#747AB9",
        "dark-gray": "#2F2F2F",
        "code-background": "#F5F4F1",
      },
      flex: {
        2: "2 2 0%",
      },

      animation: {
        shine: "shine 1s linear",
              },
      keyframes: {
        shine: {
          "100%": { left: "125%" },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
