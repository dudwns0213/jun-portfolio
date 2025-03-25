/* eslint-disable */

import type { Config } from "tailwindcss";

const pxToRem = require("tailwindcss-preset-px-to-rem");

export default {
  presets: [pxToRem],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
} satisfies Config;
