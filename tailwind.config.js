/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f58220',
        lightPrimary: '#fb923c33',
        brown: '#431407',
        hoverPrimary: 'f97316',
        yellow :'f58220'
      },
    },
  },
  corePlugins: {
    preflight: true,
  },
  purge: false,
  plugins: [],
}
