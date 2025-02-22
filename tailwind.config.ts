/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/pages/**/*.{ts,tsx}",
    "./src/app/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4CAF50",
        accent: "#F9DC5C",
      },
    },
  },
  plugins: [],
};
