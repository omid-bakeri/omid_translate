/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "440px",
      md: "580px",
      lg: "768px",
      xl: "928px",
      "2xl": "1440px",
      "3xl": "1685px",
    },
    extend: {
      colors: {
        // light
        light0: "#f0f9ff",
        light1: "#e0f2fe",
        light2: "#bae6fd",
        light3: "#7dd3fc",
        light4: "#60a5fa",
        light5: "#0ea5e9",
        // dark
        dark0: "#082f49",
        dark1: "#0c4a6e",
        dark2: "#075985",
        dark3: "#0369a1",
        dark4: "#0284c7",
      },
      fontFamily: {
        body: ["iransans_medium", "sans-serif"],
        display: ["iransans_black", "sans-serif"],
        default: ["iransans_light", "sans-serif"],
      },
    },
  },
  plugins: [],
};
