module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      Poppins:["Poppins, sans-serif"]
    }
  },
  variants:{
    cursorPointer: ["hover","group-hover"]
  },
  plugins: [],
}