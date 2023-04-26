/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        "Big_Shoulders_Display": ["Big Shoulders Display", "cursive"],
        "Lexend_Deca": ["Lexend Deca", "sans-serif"]
      },
      screens: {
        "desktop": "376px"
      },
      colors: {
        "custom-Bright-orange": "hsl(31, 77%, 52%)",
        "custom-Dark-cyan": "hsl(184, 100%, 22%)",
        "custom-Very-dark-cyan": "hsl(179, 100%, 13%)"
      }
    },
  },
  plugins: [],
}

