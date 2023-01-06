/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      colors: {
        gray: {
          100: "#F9F9F9",
          200: "#F1F1F1",
        },
        red: {
          600: "#E0195D",
        },
        blue: {
          200: "#BCE7F0",
        },
        pink: {
          400: "#F9CADA",
        },
      },
    },
  },
  plugins: [],
};
