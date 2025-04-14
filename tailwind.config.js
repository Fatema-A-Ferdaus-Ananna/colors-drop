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
        primary: "#CA0FF0",
        secondary: "#F37B3F",
        "secondary-dark": "#E6560F",
        "primary-dark": "#A20CC0",
        "light-gray": "#DFDFDF",
        "dark-gray": "#676d6e",
        "light-black": "#45494A",
        "dark-black": "#15181e",
      },
    },
  },
  plugins: [],
};
