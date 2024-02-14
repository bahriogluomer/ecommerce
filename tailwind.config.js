/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
      },
      colors: {
        primary: "#23A6F0",
        secondary: "#737373",
      },
    },
  },
  plugins: [],
};
