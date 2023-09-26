/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1d9bf0",
        dark: {},
        light: {
          gray: "#2f3336",
          primary: "#1a8cd8",
        },
        lighest: {
          gray: "#eff3f41a",
        },
        extraLight: {
          gray: "#e7e9ea",
        },
      },
      boxShadow: {
        moreBox:
          "rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px;",
      },
    },
  },
  plugins: [],
};
