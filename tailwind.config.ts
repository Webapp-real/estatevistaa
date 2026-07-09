import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      colors: {
        primary: { DEFAULT: "#0ea5e9", dark: "#0284c7", light: "#e0f2fe" },
        secondary: "#f59e0b",
        accent: "#6366f1",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
