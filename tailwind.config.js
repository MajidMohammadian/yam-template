/** @type {import('tailwindcss').Config} */

const bootstrapGrid = require('tailwind-bootstrap-grid');

module.exports = {
  content: [
    "./build/**/*.{html,js}",
  ],
  theme: {
    extend: {
      
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: "#f58220",
        lightPrimary: "#fb923c33",
        hoverPrimary: "#f97316",
        brown: "#431407",
        Gray : "#475569",
        hoverGray: "#334155",
        bgGray: "#f1f5f9",
        grayBold: "#1e293b",
        primaryNav: "#fff7ed",
        textGray: "#0f172a",
        bgPrimaryFade: "#f5822033",
        textColor: "#020617",
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1536px', 
    },
    container: {
      center: true,
      padding: '15px',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1536px', 
      },
    },
  },
  corePlugins: {
    preflight: true,
    transform: true,
  },
  purge: false,
  plugins: [
    bootstrapGrid({
      containerMaxWidths: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl:'1536px',
      },
    })
  ],
}
