import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,js,jsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        orbitron: ["var(--font-orbitron)"],
      },
    },
  },
  plugins: [],
};

export default config;
