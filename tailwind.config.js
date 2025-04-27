/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       backgroundImage: {
        'main-bg': "url('/assets/landing_page/lulu/DSCF6700.jpg')",
        'main-bg-mobile': "url('/assets/landing_page/lulu/DSCF6700-mobile.jpg')",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
