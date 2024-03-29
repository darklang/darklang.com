/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}", "./public/**/*.{html,js}"],
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
        "cli-background": "#262626",
        // classic colors
        "classic-green": "#A1B56C",
        "classic-brown": "#A1887F",
        "classic-yellow": "#E6BD81",
        "classic-blue": "#86C1B9",
        "classic-purple": "#B278FF",
        "classic-pink": "#F56FF0",
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
  plugins: [require("@tailwindcss/line-clamp")],
};
