/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xsm": "360px",
        xsm: "480px",
        ltab: "850px",
      },
      spacing: {
        sectionGapLg: "11rem",
        sectionGapMd: "9rem",
        sectionGapSm: "5rem",
        elementGapSm: "1.4rem",
        elementGapMd: "3rem",
      },
      colors: {
        primary: "#00A3B4",
        primaryLight: "#33b5c3",
        textPrimary: "#1C1B1B",
        textMediumLight: "#1c1b1bcc",
        textLight: "#1c1b1b99",
        lightGray: "#eee",
      },
      fontFamily: {
        default: "'Roboto', sans-serif",
      },
      borderRadius: {
        default: "5px",
      },
    },
  },
  plugins: [],
};
