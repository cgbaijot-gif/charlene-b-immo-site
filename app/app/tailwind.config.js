/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        or: "#C89B4F",
        noir: "#000000",
        blanc: "#F8F8F8",
        gris: "#EAEAEA"
      }
    },
  },
  plugins: [],
};
