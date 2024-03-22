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
        "banner-bgimage": "url('/img/banner.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        greyBg: "#f6f7ff",
        blueBG: "#2c36f2",
      },
      colors: {
        primary: "#707c87",
        accent: "#2c36f2",
        accentLight: "#e0e1ea",
        light: "#f6f7ff",
        dark: {
          DEFAULT: "#1f1e25",
          100: "#1F1E3F",
        },
        middlegrey: "#C1C2CA",
      },
      padding: {
        "25": "6.25rem",
      },
      fontSize: {
        "5xxl": "3.375rem",
      },
    },
  },
  plugins: [],
};
export default config;
