/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0397af",
        secondary: "#184e77",
        tertiary: "#1e6091",
        danger: "#f94144",
        success: "#b5e48c",
        warning: "#d9ed92",
      },
    },
  },
  plugins: [daisyui],
};
