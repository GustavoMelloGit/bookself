import { typographyPlugin } from "./src/constants/style/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Barlow", "sans-serif"],
    },
  },
  plugins: [typographyPlugin],
};
