/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0076d7",
          darkblue: "#005fad",
          orange: "#fe4200",
          accent: "#d43f11",
          dark: "#111827",
        }
      }
    },
  },
  plugins: [],
};
