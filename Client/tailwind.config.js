/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#009383",
        // primary: "#0397af",
        secondary: "#52b788",
        // secondary: "#184e77",
        // tertiary: "#1b4332",
        tertiary: "#1e6091",
        quaternary: "#2d6a4f",
        danger: "#f94144",
        success: "#b5e48c",
        warning: "#d9ed92",
      },
      animation: {
        shimmer: "shimmer 2s infinite linear",
        sharpness: "sharpness 1s ease-out forwards",
      },
      keyframes: {
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        sharpness: {
          "0%": { filter: "blur(8px)" },
          "100%": { filter: "blur(0)" },
        },
      },
    },
  },
  plugins: [daisyui],
};
