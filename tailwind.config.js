/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      strokeWidth: {
        0.5: "0.5",
        1: "1",
        1.5: "1.5",
        2: "2",
        // Ajouter d'autres valeurs si besoin
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
