module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  mode: 'jit',
  theme: {
    colors: {
      accent: "#5176FF",
      white: "#FFFFFF",
      white1: "#DEDEDE",
      white2: "#ECECEC",
      black: "#010101",
      black1: "#101418",
      black2: "#26364B",
      blue: "#3988FF"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
