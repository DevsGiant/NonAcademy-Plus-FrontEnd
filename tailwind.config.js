/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // screens: {
      //   xs: "414px",
      // },
      // minWidth: {
      //   xs: "414px",
      // },
      colors: {
        /*
        --cds-color-purple-975: #150333;
        --cds-color-purple-950: #340385;
        --cds-color-purple-900: #4a0fab;
        --cds-color-purple-800: #5b15cf;
        --cds-color-purple-700: #6923de;
        --cds-color-purple-600: #8040ed;
        --cds-color-purple-500: #9258f5;
        --cds-color-purple-400: #a678f5;
        --cds-color-purple-300: #c29ffc;
        --cds-color-purple-200: #d3bbfa;
        --cds-color-purple-100: #e7d9ff;
        --cds-color-purple-50: #f1e8ff;
        --cds-color-purple-25: #f9f5ff;
        --cds-color-blue-975: #00112a;
        --cds-color-blue-950: #002761;
        --cds-color-blue-900: #003b8f;
        --cds-color-blue-800: #0048b0;
        --cds-color-blue-700: #0056d2;
        --cds-color-blue-600: #1e72eb;
        --cds-color-blue-500: #3587fc;
        --cds-color-blue-400: #5b9dfc;
        --cds-color-blue-300: #87b8ff;
        --cds-color-blue-200: #adcfff;
        --cds-color-blue-100: #cfe2ff;
        --cds-color-blue-50: #e3eeff;
        --cds-color-blue-25: #f0f6ff;
        */
        "nad-primary-lite-1": "#f0f6ff",
        "nad-primary": "#0056d2",
        "nad-primary-2": "#0048b0",
        "nad-primary-3": "#003b8f",
        "nad-secondary": "#340385",
        "nad-secondary-2": "",
        "nad-secondary-3": "",
        "nad-logo": "#0086ff",
        "nad-teal": "#15A280",
        "nad-title": "#1A1729",
        "nad-gray-8": "#27272a",
        "nad-gray-9": "#18181b",
        body: "#64748B",
        stroke: "#E2E8F0",
        "gray-1": "#EFF4FB",
        "gray-2": "#F7F9FC",
        "gray-3": "#FAFAFA",
        "gray-4": "#F9F9FA",
        whiten: "#F1F5F9",
        whiter: "#F5F7FD",
        "success-1": "#219653",
        "warning-1": "#FFA70B",
        "nad-warning-4": "#fbbf24",
        "danger-1": "#FB5454",
        "danger-2": "#D34053",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "color-change": {
          "0%, 100%": { color: "#6366F1" }, // indigo-500
          "33%": { color: "#06B6D4" }, // cyan-400
          "66%": { color: "#10B981" }, // green-500
        },
        "fade-in-out": {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "color-change": "color-change 8s linear infinite",
        "fade-in-out": "fade-in-out 8s linear infinite",
        "spin-fast": "spin 0.7s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
