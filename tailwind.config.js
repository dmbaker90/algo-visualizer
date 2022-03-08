module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '75': 'repeat(75, 20px)',
      },
      gridTemplateRows: {
        '25': 'repeat(25, 20px)',
      },
      animation: {
      },
      keyframes: {
      }
    },
  },
  plugins: [],
}