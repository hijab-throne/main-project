/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       backgroundImage: {
        'main-bg': "url('/assets/desktop/landing_page/lulu/DSCF6700.jpg')",
        'main-bg-mobile': "url('/assets/mobile/landing_page/lulu/DSCF6700.jpg')",
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
