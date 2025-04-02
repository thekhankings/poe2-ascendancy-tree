/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'scale-[1.2]',
    'scale-[1.3]',
    'origin-top',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}