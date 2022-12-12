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
      },
      minWidth: {
        '220': "220px",
      },
      backdropImage: {
        // 'hero': "url('/images/hero.jpg')",
      }
    },

  },
  plugins: [],
};
