/** @type {import('tailwindcss').Config} */
import { addDynamicIconSelectors } from "@iconify/tailwind";
export default {
  content: ["./index.html", "./main.js", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [addDynamicIconSelectors(), require("@tailwindcss/forms")],
};
