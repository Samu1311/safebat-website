/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{ts,js}"
  ],
  theme: {
    extend: {
      colors: {
        ecoLime: "#BAFF53",
        batteryYellow: "#FAC402",
        carbonBlack: "#212121",
        ironGrey: "#474747",
        offWhite: "#F5F3EE",
        brand: {
          lime: "#BAFF53",
          yellow: "#FAC402",
          dark: "#212121"
        },
        surface: {
          DEFAULT: "#05080D",
          soft: "#101319",
          strong: "#020308"
        }
      },
      boxShadow: {
        "soft-lg": "0 18px 45px rgba(0, 0, 0, 0.6)",
        "soft-card": "0 10px 30px rgba(0, 0, 0, 0.5)"
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem"
      }
    }
  },
  plugins: []
};
