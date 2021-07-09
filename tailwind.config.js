module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#3CACF2',
        secondary: '#EBAD25',
        darken: '#1B8CD4',
        lighten: '#69B9EC',
        background: '#F1F8FD'
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
