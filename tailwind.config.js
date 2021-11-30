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
      black: "#070A0E",
      black1: "#17202D",
      black2: "#26364B",
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
