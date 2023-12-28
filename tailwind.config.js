/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // All the files which will be using tailwind css. The line below means all files with html, js, ts, jsx, tsx in the end will use
    // tailwind css.
    "./src/**/*.{html,js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
}


