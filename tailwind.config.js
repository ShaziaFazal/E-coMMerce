/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/** @type {import('tailwindcss').Config} */
// import colors from 'tailwindcss/colors';
const defaultTheme = require('tailwindcss/defaultTheme')
// export const mode = 'jit';
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 15s linear infinite",
      },
      gridTemplateRows: {
        "[auto,auto,1fr]": "auto auto 1fr",
      },
      colors: {
        customPurple: "#1B7979",
        customYellow: "#61346B",
        customPlum: "#E6A1D7",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(200%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      screens: {
        'xs': '150px',
        ...defaultTheme.screens,
      }
    },
  },
  plugins: [
    // ...
    require("@tailwindcss/aspect-ratio"),
  ],
};
