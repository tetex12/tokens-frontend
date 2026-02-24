import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-arena": "#0B0F1A",
        "card-arena": "#12182B",
        "cyan-neon": "#00CFFF",
        "purple-neon": "#A020F0",
        "text-arena": "#EAF2FF",
      },
      boxShadow: {
        glow: "0 0 30px rgba(0,207,255,0.25)",
        glow2: "0 0 40px rgba(160,32,240,0.25)",
      },
    },
  },
  plugins: [],
} satisfies Config;
