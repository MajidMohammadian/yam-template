/** @type {import('tailwindcss').Config} */
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
        Gray : "#1e293b",
        hoverGray : "#334155",
      },
    },
  },
  corePlugins: {
    preflight: true,
  },
  purge: false,
  plugins: [],
}
