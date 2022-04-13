const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  darkMode: "media",
  purge: ["./public/**/*.html", "./src/**/*.{js,ts,svelte}"],
  theme: {
    colors,
    extend: {
      keyframes: {
        rotation: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
    },
    fontFamily: {
      "roboto-medium": ["Roboto Medium"],
    },
    boxShadow: {
      ...defaultTheme.boxShadow,
      card: "0 0 4px 0 #cfdee5",
    },
  },
  variants: [
    "responsive",
    "group-hover",
    "focus-within",
    "first",
    "last",
    "odd",
    "even",
    "hover",
    "focus",
    "active",
    "visited",
    "disabled",
  ],
  plugins: [],
};
