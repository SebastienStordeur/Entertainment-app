/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      brightness: {
        300: "3",
      },
    },
    colors: {
      red: "#FC4747",
      darkblue: "#10141E",
      greyblue: "#5A698F",
      semidarkblue: "#161D2F",
      white: "#FFFFFF",
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("children", "&>*");
    },
  ],
};
