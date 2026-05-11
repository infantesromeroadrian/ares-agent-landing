import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // openclaw.ai palette — legacy aliases preserve existing class semantics
        navy: "#050810",
        navyDarker: "#090E18",
        primary: "#F0F4FF",
        accent: "#F0F4FF",
        // explicit openclaw tokens
        "oc-bg": "#050810",
        "oc-surface": "#090E18",
        "oc-border": "#191D28",
        "oc-fg": "#F0F4FF",
        // openclaw accent palette (extracted visually from screenshot)
        brand: "#FF5722",
        "brand-hover": "#FF6E40",
        coral: "#FF4444",
        "tab-active": "#00ff88",
        "syntax-pink": "#ff6b9d",
        "syntax-green": "#00ff88",
      },
      fontFamily: {
        mono: ['"Satoshi"', '"Courier Prime"', "monospace"],
        serif: ['"Clash Display"', '"Cormorant"', "serif"],
        display: ['"Clash Display"', "system-ui", "sans-serif"],
        body: ['"Satoshi"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
