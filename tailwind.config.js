/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#270e14",
        cream: "#fffdf9",
        ivory: "#fcf8f0",
        paper: "#faf4e8",
        gold: {
          light: "#fef3c7",
          DEFAULT: "#d97706",
          deep: "#b45309",
          bright: "#f59e0b",
        },
        rose: {
          light: "#ffe4e6",
          DEFAULT: "#e11d48",
          deep: "#9f1239",
          ruby: "#be123c",
        },
        marigold: {
          light: "#fef08a",
          DEFAULT: "#f59e0b",
          deep: "#ea580c",
        },
        emerald: {
          DEFAULT: "#047857",
          light: "#d1fae5",
        },
      },
      fontFamily: {
        script: ['"Great Vibes"', '"Alex Brush"', "cursive"],
        brush: ['"Alex Brush"', '"Great Vibes"', "cursive"],
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        cinzel: ['"Cinzel"', "Georgia", "serif"],
        devanagari: ['"Noto Serif Devanagari"', "Mangal", "serif"],
        sans: ['"Outfit"', "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        gold: "0 10px 30px -5px rgba(217, 119, 6, 0.25)",
        royal: "0 20px 50px -10px rgba(190, 18, 60, 0.2)",
      },
    },
  },
  plugins: [],
};
