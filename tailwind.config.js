module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      brightness: {
        25: '.25',
      },
    },
    fontfamily: {
      'roboto': ['Roboto'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
