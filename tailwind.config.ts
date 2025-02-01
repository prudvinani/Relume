import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        // relative: ['Relative', 'sans-serif'],
        
        relative: ["Relative", "sans-serif"],
        "open-sans": ["var(--font-open-sans)"],
        geist: ["var(--font-geist-sans)"],
        
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
