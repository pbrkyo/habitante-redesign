import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        carbon: "#2D2D2D",
        ink: "#3A3830",
        sand: {
          DEFAULT: "#B5AAA0",
          light: "#C8C3BC",
        },
        bone: "#D6D1CB",
        linen: "#F0EDE7",
        cream: "#F7F5F1",
        white: "#FDFCFA",
        az: {
          deep: "#002B7F",
          brand: "#1434CB",
          electric: "#2B3FD4",
          light: "#E8EEF8",
          mid: "#D0DCEF",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(44px, 6vw, 70px)", { lineHeight: "1.05" }],
        "display-lg": ["clamp(28px, 4vw, 44px)", { lineHeight: "1.32" }],
        "display-md": ["clamp(22px, 3vw, 34px)", { lineHeight: "1.35" }],
        "display-sm": ["clamp(18px, 2.5vw, 24px)", { lineHeight: "1.3" }],
      },
      letterSpacing: {
        label: "0.22em",
        nav: "0.12em",
        wide: "0.25em",
      },
      borderWidth: {
        thin: "0.5px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
