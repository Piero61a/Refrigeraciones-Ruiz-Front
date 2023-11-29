/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors:{
      white: "#FFFFFF",
      primary_text: "#5353FF",
      secondary_text: "#3E6EFF",
      tertiary_text: "#1A1A1A",
      primary_btn: "#3366FF",
      primary_btn_hover: "##195CED",
      primary_bg: "#4388CC",
      secondary_bg: "#E2E2E2",
      primary_input_border: "#5B5959",
      error_color: "#FF0000",
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/public/LoginImage.jpg')",
      }
    },
  },
  plugins: [nextui()],
}

