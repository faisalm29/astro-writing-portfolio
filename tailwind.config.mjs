import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      gray: {
        50: "hsla(0, 0%, 100%, 1)",
        100: "hsla(0, 2%, 84%, 1)",
        200: "hsla(0, 2%, 72%, 1)",
        300: "hsla(0, 2%, 61%, 1)",
        400: "hsla(0, 2%, 51%, 1)",
        500: "hsla(15, 2%, 42%, 1)",
        600: "hsla(15, 2%, 35%, 1)",
        700: "hsla(15, 3%, 27%, 1)",
        800: "hsla(20, 3%, 21%, 1)",
        900: "hsla(0, 1%, 15%, 1)",
        950: "hsla(0, 0%, 7%, 1)",
      },
    },
    fontFamily: {
      sans: ["Uncut Sans", ...defaultTheme.fontFamily.sans],
      serif: ["source-serif-4", ...defaultTheme.fontFamily.serif],
    },
    fontSize: {
      xs: "0.8125rem", // 13px
      base: "1rem", // 16px
      sm: "1.25rem", // 20px
      md: "1.5626rem", // 25px
      lg: "1.9375rem", // 31px
      xl: "2.4375rem", // 39px
      "2xl": "3.0625rem", // 49px
      "3xl": "3.8125rem", // 61px
      "4xl": "4.75rem", // 76px
      "5xl": "5.9375rem", // 95px
    },
  },
  plugins: [],
};
