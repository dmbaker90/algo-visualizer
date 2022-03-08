module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        '50': 'repeat(50, minmax(10px, 1fr))',

        // Complex site-specific column configuration
        // 'footer': '200px minmax(900px, 1fr) 100px',
      },

      gridTemplateRows: {
        // Simple 8 row grid
        '25': 'repeat(25, 1fr)',

        // Complex site-specific row configuration
        // 'layout': '200px minmax(900px, 1fr) 100px',
      }
    },
  },
  plugins: [],
}