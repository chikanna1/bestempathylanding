import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      denim: {
        50: "#f2f7fd",
        100: "#e3eefb",
        200: "#c1ddf6",
        300: "#8bc0ee",
        400: "#4da0e3",
        500: "#2785d0",
        600: "#196cb8",
        700: "#15538f",
        800: "#154777",
        900: "#173d63",
        950: "#0f2742",
      },
      "mint-tulip": {
        50: "#f1fcfb",
        100: "#c6f4f1",
        200: "#a3ece9",
        300: "#6ddbda",
        400: "#3ec0c3",
        500: "#25a2a7",
        600: "#1b8086",
        700: "#1a656b",
        800: "#195156",
        900: "#194448",
        950: "#08272b",
      },
      // ...
    },
  },
  plugins: [],
};
export default withMT(config);
