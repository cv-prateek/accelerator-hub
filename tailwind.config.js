/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: true,
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    container: {
      center: true
    },
    extend: {},
  },
  plugins: [],
}
