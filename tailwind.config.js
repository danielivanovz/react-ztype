/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      rotate: {
        1: "1deg",
        2: "2deg",
        3: "3deg",
        4: "4deg",
        5: "5deg",
      },
    },
  },
  plugins: [],
}
