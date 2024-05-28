const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    colors: {
      body: "#867070",
      white: "#fff",
      green: { DEFAULT: "#009246", hover: "#00B255" },
      black: { DEFAULT: "#273029", heavy: "#1b211c", deep: "#000000" },
      red: { DEFAULT: "#D5B4B4", hover: "#CE9E9E" },
      deepRed: { DEFAULT: "#FF0000" },

      grey: "#888888",
      orange: {
        DEFAULT: "#F2994A",
        hover: "#da863c",
      },
      blue: { DEFAULT: "#B5C0D0", hover: "#DAE3F0" },

      outline: "#f1f1f1",
      pink: "ffa5a",
    },
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        lora: ["var(--font-lora)", "sans-serif"],
        urbnanist: ["var(--font-urbanist)", "sans-serif"],
      },
      backgroundImage: {
        hero: "url(/hero/bg.png)",
        menu: "url(/menu/bg.png)",
        reservation: "url(/reservation/reservation.jpg)",
        footer: "url(/footer/bg.png)",
      },
      boxShadow: {
        primary: "40px 4px 40px rgba(68,68,68,0.25)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), [nextui()]],
};
