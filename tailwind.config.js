module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: { 900: "#FA0E0E" }, // colorのカスタム
        blue: {
          900: "#2F9BFF", // colorのカスタム
        },
        black: {
          900: "#002134", // colorのカスタム
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
