import colors from 'tailwindcss/colors';

export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const mode = 'jit';
export const theme = {
  extend: {
    animation: {
      marquee: 'marquee 15s linear infinite',
    }, 
    colors: {
      customPurple: '#1B7979',
      customYellow: '#61346B',
      customPlum: '#E6A1D7'

    },
    keyframes: {
      marquee: {
        '0%': { transform: 'translateX(200%)' },
        '100%': { transform: 'translateX(-100%)' },
      },
    },
  },
};
export const variants = {};
export const plugins = [];
