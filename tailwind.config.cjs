/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Satoshi", "system-ui", "sans-serif"],
      },
      colors: {
        dark: "#141516ff",
        light: "#f9f9f4ff",
      },
    },
  },
  plugins: [],
};
