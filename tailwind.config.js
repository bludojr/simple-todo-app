/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      margin:{
        "13.25":"53px"
      },
      borderRadius:{
        "12":"12px"
      },
      backgroundImage:{
        "custom-gradient":"linear-gradient(192.04deg, #5E54F7 0%, #F7A5CB 54.14%, #C47151 100%)",
      },
      backgroundColor: { 
        "custom1": "#4400FF1F", 
        "custom2": "#00F0FF1A",
        "custom3":"#8378eb",
        "custom4":"#cdbaf1",
        "custom5":"#a794ea",
        "plain":"#F9FAFB"},
      borderWidth: {
        "12": "12px",
      },
      inset: {
        "50": "12.5rem",
      },

      height: {
        "custom1": "497px",
        "200": "50rem",
      },
      width: {
        custom1: "497px",
        "200": "50rem",
        "90": "22.5rem"
      },
      fontFamily: {
        "inter": ["inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
