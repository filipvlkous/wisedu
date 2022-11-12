/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Bitter: ["Comfortaa", "cursive"],
        Fred: ["var(--font-inter)", "cursive"],
      },
      aspectRatio: {
        "4/3": "4 / 3",
      },
      colors: {
        primary: "#A975DE",
        primaryClicked: "#B08FD0",
        secondary: "#fff",
        third: "#CFBAE2",
      },
    },
  },
  plugins: [],
};
