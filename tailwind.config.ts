import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        'hover': '#ffffff11',
      },
      colors: {
        'icon-hover': '#a8a8a8',
      },
      dropShadow: {
        around: "0px 0px 10px rgba(0, 0, 0, 0.3)",
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
        swell: "swell 0.6s ease-in-out 1",
        'swell-tiny': 'swell-tiny 0.5s ease-in-out 1',
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        swell: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.3)" },
        },
        'swell-tiny': {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.07)" },
        },
      },
      screens: {
        xs: '468px',
        sm: '768px',
        md: '1160px',
        lg: '1264px',
      },
      transitionProperty: {
        'height' : 'height'
      },
      width: {
        feed: '470px',
      },
      maxWidth: {
        feed: '470px',
      },
      height: {
        carousel: '500px',
      },
      maxHeight: {
        carousel: '500px',
      },
    },
  },
  plugins: [],
};
export default config;
