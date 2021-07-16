module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      "primary-600": "var(--cllr-primary-600)",
      "primary-500": "var(--cllr-primary-500)",
      "secondary-600": "var(--cllr-secondary-600)",
      "secondary-500": "var(--cllr-secondary-500)",
      "white": "#ffffff"
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
