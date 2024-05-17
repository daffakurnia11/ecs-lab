import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        text: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "7xl": ["64px", "150%"],
        "6xl": ["48px", "150%"],
        "5xl": ["42px", "150%"],
        "4xl": ["36px", "150%"],
        "3xl": ["32px", "150%"],
        "2xl": ["24px", "150%"],
        xl: ["20px", "150%"],
        lg: ["18px", "150%"],
        base: ["16px", "150%"],
        sm: ["14px", "150%"],
        xs: ["12px", "150%"],
      },
    },
  },
  plugins: [],
};
export default config;
