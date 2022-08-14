/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#004A74",
          secondary: "#474747",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}