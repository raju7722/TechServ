/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        card: "0 28px 72px rgba(68, 35, 159, 0.16)",
        soft: "0 22px 65px rgba(111, 76, 255, 0.14)",
      },
    },
  },
  plugins: [],
};
