/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "400px",
      xls: "550px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
      screens: {
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    fontFamily: {
      playfair: ["Playfair Display", "sans-serif"],
    },
    extend: {
      keyframes: {
        "fade-in": {
          from: { top: "0", opacity: 0.1 },
          to: { top: "100%", opacity: 1 },
        },
        "fade-out": {
          from: { top: "100%", opacity: 1 },
          to: { top: "0", opacity: 0.1 },
        },
        "fade-left": {
          from: { transform: "translateX(100px)" },
          to: { transform: "translateX(0)"  },
        },
      },
      animation: {
        fadeIn: "fade-in 0.2s ease-out",
        fadeOut: "fade-out 0.2s ease-in",
        fadeLeft: "fade-left 1.2s ease-in",
      },
    },
  },
  plugins: [],
};
