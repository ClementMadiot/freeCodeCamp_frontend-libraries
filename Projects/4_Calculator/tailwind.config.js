/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: {
          100:"#f5f5f5",
          200: "#c9c9c9",
        },
        gold: "#6F675B",
        red: "#8A2E2E",
        blue: "#003652",
        gold: "#8c8273",
        grey: {
          100: "#4D5356",
          200: "#3A3F41",
          300: "#3a3f41",
        }
      },
      backgroundColor: {
        DEFAULT: "var(--dark-blue)",
      },
      fontFamily: {
        shareTechMono: "var(--font-shareTechMono)",
        digital: "var(--font-digital)"
      }
    },
  },
  plugins: [],
};
