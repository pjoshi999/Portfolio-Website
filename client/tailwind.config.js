/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    screens: {
      xs: "290px",
      // => @media (min-width: 290px) { ... }

      sm: "375px",
      // => @media (min-width: 640px) { ... }

      md: "781px",
      // => @media (min-width: 768px) { ... }

      lg: "1095px",
      // => @media (min-width: 1024px) { ... }

      xl: "1384px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    safelist: [
      "animate-[slide-left_1s_ease-in-out]",
      "animate-[slide-right_1s_ease-in-out]",
    ],
  },
  plugins: [],
};
