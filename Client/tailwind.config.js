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
        
        lavender: "rgb(195, 177, 225)",
        softBlue: "rgb(230, 240, 255)",    // Lighter blue start color
        endPurple: "rgb(232, 191, 251)",   // End purple color #E8BFFB
        
      },
      animation: {
        shimmer: 'shimmer 2s infinite linear',
        sharpness: 'sharpness 1s ease-out forwards',
      },
      keyframes: {
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        sharpness: {
          '0%': { filter: 'blur(8px)' },
          '100%': { filter: 'blur(0)' }
        }
      }
    },
  },
  plugins: [daisyui],
};