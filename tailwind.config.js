/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
       keyframes: {
          fadeUp: {
            "0%": { opacity: 0, transform: "translateY(20px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
          },
          fadeIn: {
            "0%": { opacity: 0 },
            "100%": { opacity: 1 },
          },
          slideIn: {
            "0%": { opacity: 0, transform: "translateX(-30px)" },
            "100%": { opacity: 1, transform: "translateX(0)" },
          },
       },
      animation: {
        fadeUp: "fadeUp 0.7s ease-out forwards",
        fadeIn: "fadeIn 0.8s ease-out forwards",
        slideIn: "slideIn 0.7s ease-out forwards",
    },  
    },
  },
  plugins: [],
}