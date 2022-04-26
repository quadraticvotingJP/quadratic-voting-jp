module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        red: { 800: "", 900: "" },
        blue: {
          800: "",
          900: "#2F9BFF",
        },
        black: {
          800: "",
          900: "#002134",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
