module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    backgroundImage: (theme) =>({
      'wave-bg': "url('../assets/waves.png')"
    }),
    fontFamily:{
      Poppins:["Poppins, sans-serif"]
    }
  },
  plugins: [],
}