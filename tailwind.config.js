/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        "[auto,auto,1fr]": "auto auto 1fr",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
  // Custom animations
  keyframes: {
    marquee: {
      "0%": {
        transform: "translateX(100%)",
      },
      "100%": {
        transform: "translateX(-100%)",
      },
    },
  },
  // Animation configuration
  animation: {
    marquee: "marquee 10s linear infinite",
  },
};
