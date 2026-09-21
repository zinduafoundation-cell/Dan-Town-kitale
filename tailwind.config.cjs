/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        dantown: {
          blue: "#0759B8",
          dark: "#031B3D",
          orange: "#F5A623",
          white: "#FFFFFF",
          black: "#05070A",
        },
      },
    },
  },

  plugins: [],
};

