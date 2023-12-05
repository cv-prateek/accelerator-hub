/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    container: {},
    extend: {
      colors: {
        background: "#dcf3fa50",
        primary: "#005071",
        secondary: "#E83151",
        exlRed: "#FB4E0B",
        dark: "#2E3643"
      }
    },
  },
  plugins: [],
}
