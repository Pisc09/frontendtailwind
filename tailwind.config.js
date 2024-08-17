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
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
