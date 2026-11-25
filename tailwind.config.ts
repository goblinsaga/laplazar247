
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tactical: {
          950: "#080808",
          900: "#101010",
          800: "#181818",
          700: "#242424",
          yellow: "#FFD500",
          accent: "#FFEA00",
        },
      },
      boxShadow: {
        glow: "0 0 35px rgba(255, 213, 0, 0.12)",
        "yellow-glow": "0 0 20px rgba(255, 213, 0, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;