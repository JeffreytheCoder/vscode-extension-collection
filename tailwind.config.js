module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#2563EB',
        secondary: '#EBAD25',
        lighten: '#F2F9FF',
        grayscale: '#888888'
      },
      fontFamily: {
        main: ['Nunito']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
