/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        accent: "#F1F1F1",
        primary: "#3C3C3C",
      },
    },
  },
  plugins: [],
};
