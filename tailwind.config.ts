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
        obsidian: {
          DEFAULT: "#07090E",
          surface: "#0F141C",
          border: "#1E293B",
        },
        slate: {
          text: "#E2E8F0",
          muted: "#94A3B8",
        },
        accent: {
          emerald: "#10B981",
          cyan: "#06B6D4",
        },
      },
      boxShadow: {
        glow: "0 0 20px -3px rgba(16, 185, 129, 0.3)",
        "glow-cyan": "0 0 20px -3px rgba(6, 182, 212, 0.3)",
      },
      fontFamily: {
        display: [
          "'Space Grotesk'",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "sans-serif",
        ],
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "'Helvetica Neue'",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "'JetBrains Mono'",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "'Liberation Mono'",
          "'Courier New'",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
