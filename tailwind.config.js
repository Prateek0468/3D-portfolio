/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx}"];
export const mode = "jit";
export const theme = {
  extend: {
    keyframes: {
      slide: {
        'from': {
          transform: 'translateX(0)'
        },
        'to': {
          transform: 'translateX(-100%)'
        }
      }
    },
    animation:{
      "slider": '15s slide linear infinite'
    },
    colors: {
      primary: "#050816",
      secondary: "#aaa6c3",
      tertiary: "#151030",
      "black-100": "#100d25",
      "black-200": "#090325",
      "white-100": "#f3f3f3",
    },
    boxShadow: {
      card: "0px 35px 120px -15px #211e35",
    },
    screens: {
      xs: "450px",
    },
    backgroundImage: {
      "hero-pattern": "url('/src/assets/herobg.png')",
    },
  },
};
export const plugins = [];