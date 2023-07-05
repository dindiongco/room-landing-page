/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "neutral-100": "hsl(0, 0%, 100%)",
        "neutral-700": "hsl(0, 0%, 63%)",
        "neutral-800": "hsl(0, 0%, 27%)",
        "neutral-900": "hsl(0, 0%, 0%)",
      },
      fontFamily: {
        spartan: ["League Spartan", "sans-serif"],
      },
      fontWeight: {
        medium: "500",
        semiBold: "600",
        bold: "700",
      },
      content: {
        patternbg: "url('./assets/pattern-bg.svg')",
        patterncurve: "url('./assets/pattern-curve.svg')",
        patternquotes: "url('./assets/pattern-quotes.svg')",
      },
      screens: {
        xs: "320px",
        sm: "375px",
        md: "768px",
      },
    },
  },
  plugins: [],
};
