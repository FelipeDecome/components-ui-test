module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: {
        light: '#a382f6',
        neutral: '#5b31e2',
        dark: '#3218a2'
      },
      secondary: {
        light: '#f682ac',
        neutral: '#e23195',
        dark: '#a21882'
      },
      base: {
        lightest: '#ffffff',
        light: '#dedede',
        neutral: '#b3b3b3',
        dark: '#5e5e5e',
        darkest: '#343434'
      }
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    },
    fontSize: {
      paragraph: [
        '16px',
        {
          lineHeight: '28px',
          letterSpacing: '0.02em',
        }
      ],
      'button-xs': ['12px', '14px'],
      'button-sm': ['14px', '16px'],
      'button-md': ['16px', '19px'],
      'button-lg': ['18px', '21px'],
    },
    spacing: {
      '0.5': '4px',
      '1': '8px',
      '1.5': '12px',
      '2': '16px',
      '2.5': '20px'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
