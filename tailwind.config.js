/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        secondary: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7c3aed",
          800: "#6b21a8",
          900: "#581c87",
        },
      },
      fontFamily: {
        display: ["Syne", "system-ui", "sans-serif"],
        sans: ["General Sans", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      fontSize: {
        "display-1": ["5rem", { lineHeight: "1", letterSpacing: "-0.03em" }],
        "display-2": ["4rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-3": [
          "3.25rem",
          { lineHeight: "1.2", letterSpacing: "-0.02em" },
        ],
        "heading-1": [
          "2.75rem",
          { lineHeight: "1.2", letterSpacing: "-0.02em" },
        ],
        "heading-2": [
          "2.25rem",
          { lineHeight: "1.3", letterSpacing: "-0.01em" },
        ],
        "heading-3": [
          "1.75rem",
          { lineHeight: "1.4", letterSpacing: "-0.01em" },
        ],
        "body-lg": ["1.25rem", { lineHeight: "1.7" }],
        body: ["1.125rem", { lineHeight: "1.6" }],
        "body-sm": ["1rem", { lineHeight: "1.5" }],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "spin-slow": "spin 8s linear infinite",
        "bounce-slow": "bounce 3s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glow: "0 0 20px rgba(6, 182, 212, 0.3)",
        "glow-lg": "0 0 40px rgba(6, 182, 212, 0.4)",
        "inner-glow": "inset 0 0 20px rgba(6, 182, 212, 0.1)",
      },
    },
  },
  plugins: [],
};
