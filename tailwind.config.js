/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '0px 7px 29px rgba(173, 173, 173, 0.3)',
      },
    },
  },
  plugins: [],
}