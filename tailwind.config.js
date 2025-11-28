/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0B1220",
        card: "#101826",
        bluebtn: "#1B4FFF",
      }
    }
  },
  plugins: [],
};

