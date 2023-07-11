/** @type {import('tailwindcss').Config} */

function combineArrays(array1, array2) {
  const combinations = [];

  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      combinations.push(array1[i] + array2[j]);
    }
  }

  return combinations;
}

const array1 = ["bg-", "text-"];
const array2 = [
  "neutral-500",
  "amber-500",
  "orange-500",
  "pink-500",
  "fuchsia-500",
  "purple-500",
];

const result = combineArrays(array1, array2);

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
      backgroundImage: {
        waves: "url('waves.svg')",
      },
    },
  },
  safelist: ["w-4", "w-6", "w-8", ...result],
  plugins: [require("@tailwindcss/typography")],
};
