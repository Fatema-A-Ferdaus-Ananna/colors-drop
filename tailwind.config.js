/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#f72585",
        "primary-dark": "#d90866",
        secondary: "#4cc9f0",
        "secondary-dark": "#12b2e2",
        "light-gray": "#DFDFDF",
        "dark-gray": "#676d6e",
        "light-black": "#45494A",
        "dark-black": "#15181e",
      },
    },
  },
  plugins: [],
};
