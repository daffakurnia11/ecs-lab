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
      colors: {
        primary: {
          25: '#FDF6DB',
          50: '#FCF1C9',
          100: '#FBECB7',
          200: '#FAE8A4',
          300: '#F9E392',
          400: '#F8DE80',
          500: '#F7DA6E',
          600: '#F6D55C',
          700: '#DBBD52',
          800: '#BFA648',
          900: '#A48E3D',
        },
        secondary: {
          25: '#D3CDCB',
          50: '#BEB5B1',
          100: '#A89C97',
          200: '#92837E',
          300: '#7C6A64',
          400: '#67524A',
          500: '#513930',
          600: '#3B2016',
          700: '#341C14',
          800: '#2E1911',
          900: '#27150F',
        },
        success: {
          25: '#F6FFED',
          50: '#EEFFDD',
          100: '#E5FACF',
          200: '#C7F5A3',
          300: '#9AE16F',
          400: '#6EC448',
          500: '#389C1A',
          600: '#248512',
          700: '#156F0D',
          800: '#0A5908',
          900: '#054703',
        },
        warning: {
          25: '#FFFEED',
          50: '#FFFDCD',
          100: '#FEFACB',
          200: '#FDF498',
          300: '#FBEB63',
          400: '#FADE3D',
          500: '#F4D000',
          600: '#D1AF01',
          700: '#AF9000',
          800: '#8D7200',
          900: '#705B03',
        },
        error: {
          25: '#FFF6EE',
          50: '#FFFEF0',
          100: '#FEE5CE',
          200: '#FBC69D',
          300: '#F69D6D',
          400: '#EC7547',
          500: '#E13B11',
          600: '#C0230B',
          700: '#A10F08',
          800: '#810406',
          900: '#650203',
        },
        neutral: {
          0: '#FFFFFF',
          25: '#FCFDFD',
          50: '#F9FAFB',
          100: '#F2F4F7',
          200: '#E4E7EC',
          300: '#D0D5DD',
          400: '#98A1B3',
          500: '#667085',
          600: '#475067',
          700: '#343C54',
          800: '#1D2339',
          900: '#101428',
        },
      },
    },
  },
  plugins: [],
};
export default config;
