/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      strokeWidth: {
        0.5: "0.5px",
        1: "1px",
        1.5: "1.5px",
        2: "2px",
        // Ajouter d'autres valeurs si besoin
      },
      colors: {
        mandy: {
          // ↑ Ici, j'ai conçu une variante couleur appelée "mandy"
          50: "#fef2f3",
          100: "#fde6e7",
          200: "#fbd0d5",
          300: "#f7aab2",
          400: "#f27a8a",
          500: "#ea546c",
          600: "#d5294d",
          700: "#b31d3f",
          800: "#961b3c",
          900: "#811a39",
          950: "#48091a",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
