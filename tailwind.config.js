module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      serif:
        'var(--libre-baskerville), ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
    },
    extend: {},
    colors: {
      'primary': { 
          50: '#fefeff', 
          100: '#fcfcfd', 
          200: '#f8f9fb', 
          300: '#f2f5f7', 
          400: '#ebeff3', 
          500: '#e2e8ee', 
          600: '#d8e0e8', 
          700: '#ccd6e0', 
          800: '#526c89', 
          900: '#232e3a', 
          950: '#131920', 
        },
    }
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
