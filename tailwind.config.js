/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./build/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f58220",
        lightPrimary: "#fb923c33",
        hoverPrimary: "#f97316",
        brown: "#431407",
        yellow :"#f58220"
      },
    },
  },
  corePlugins: {
    preflight: true,
  },
  purge: false,
  plugins: [],
}
