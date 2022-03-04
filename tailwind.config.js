module.exports = {
  mode:"jit",
  darkMode:false,
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl":"2000px"
      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}