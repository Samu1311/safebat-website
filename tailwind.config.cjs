/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{ts,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Flat Aliases for legacy support (Keep these if you have old HTML using them)
        ecoLime: "#BAFF53",
        batteryYellow: "#FAC402",
        carbonBlack: "#212121",
        ironGrey: "#474747",
        offWhite: "#F5F3EE",

        brand: {
          // Eco-Innovation Primary
          lime: {
            DEFAULT: "#BAFF53",
            50: "#F7FEE7",
            100: "#ECFCCB",
            200: "#D9F99D",
            300: "#BEF264",
            400: "#A3E635",
            500: "#BAFF53", 
            600: "#84CC16",
            700: "#65A30D",
            800: "#4D7C0F",
            900: "#3F6212",
            950: "#1A2E05",
          },
          // Energy & Battery Secondary
          yellow: {
            DEFAULT: "#FAC402",
            50: "#FFFBEB",
            100: "#FEF3C7",
            200: "#FDE68A",
            300: "#FCD34D",
            400: "#FBBF24",
            500: "#FAC402", 
            600: "#D97706",
            700: "#B45309",
            800: "#92400E",
            900: "#78350F",
            950: "#451A03",
          },
          // Technical Neutrals (Carbon)
          black: {
            DEFAULT: "#212121",
            50: "#F9FAF9",
            100: "#F1F1F1",
            200: "#E2E2E2",
            300: "#C6C6C6",
            400: "#8E8E8E",
            500: "#606060",
            600: "#454545",
            700: "#323232",
            800: "#212121", 
            900: "#171717",
            950: "#0D0D0D",
          },
          // Technical Grays (Iron)
          grey: {
            DEFAULT: "#474747",
            50: "#F8F8F8",
            100: "#F1F1F1",
            200: "#E4E4E4",
            300: "#D1D1D1",
            400: "#A2A2A2",
            500: "#787878",
            600: "#5D5D5D",
            700: "#474747", 
            800: "#333333",
            900: "#242424",
            950: "#121212",
          },
          // Background & Surface Warmth
          offWhite: {
            DEFAULT: "#F5F3EE",
            50: "#FFFFFF",
            100: "#F5F3EE", 
            200: "#EBE8E0",
            300: "#DED9CD",
            400: "#C4BCAB",
            500: "#A69B88",
            600: "#857B69",
            700: "#665E51",
            800: "#474238",
            900: "#2E2A24",
            950: "#1A1815",
          }
        },
        surface: {
          DEFAULT: "#05080D",  
          soft: "#101319",     
          strong: "#020308",   
          border: "rgba(255, 255, 255, 0.08)",
        },
        accent: {
          muted: "rgba(186, 255, 83, 0.15)", 
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "Satoshi", "sans-serif"],
      },
      boxShadow: {
        "premium": "0 20px 50px -12px rgba(0, 0, 0, 0.5)",
        "glass": "inset 0 1px 1px 0 rgba(255, 255, 255, 0.05)",
        "brand": "0 10px 30px -10px rgba(186, 255, 83, 0.3)",
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'liquid': 'liquid 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        liquid: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        }
      }
    }
  },
  plugins: []
};