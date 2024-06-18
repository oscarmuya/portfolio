import type { Config } from "tailwindcss";

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
      colors: {
        primaryColor: "#0ea5e9",
        primaryBg: "#1769e3",
        secondaryColor: "#ff0",
      },
      fontFamily: {
        inherit: "inherit",
        med: "var(--font-med)",
        lxe: "var(--font-lxe)",
      },
    },
  },
  plugins: [],
};
export default config;
