/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      mono: [
        "SF Mono",
        "SFMono-Regular",
        "ui-monospace",
        "DejaVu Sans Mono",
        "Menlo",
        "Consolas",
        "monospace",
      ],
    },
    extend: {
      colors: {
        darkBlue: "#04001f",
        cardColor: "#1c1354",
      },
      minWidth: {
        220: "220px",
      },
      backdropImage: {
        // 'hero': "url('/images/hero.jpg')",
      },
      boxShadow: {
        border: "0 0 0 0.5px rgba(255, 255, 255, 0.2)",
      },
      animation: {
        grow: "growing 0.5s ease-in forwards",
        raise: "raising 0.5s ease-out forwards",
        faideIn: "fadingIn 2s ease-in forwards",
      },
      keyframes: {
        growing: {
          "0%": {
            transform: "scale(1)",
          },
          "100%": {
            transform: "scale(1.5)",
          },
        },
        raising: {
          "0%": {
            transform: "translateY(0)",
          },
          "100%": {
            transform: "translateY(-5px)",
          },
        },
        fadingIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
