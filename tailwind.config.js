/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

// npx tailwindcss -i ./src/input.css -o ./dist/style.css --watch

