module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    colors: {
      inherit: 'inherit',
      transparent: 'transparent',
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
      headline1: ['3rem'],
      headline2: ['2.125rem', {
        letterSpacing: 0.25,
      }],
      headline3: ['1.5rem'],
      headline4: ['1.25rem', {
        letterSpacing: 0.15,
      }],
      subtitle1: ['1rem', {
          letterSpacing: 0.15,
      }],
      subtitle2: ['0.875rem', {
        letterSpacing: 0.1,
      }],
      body1: ['1rem', {
        letterSpacing: 0.5,
      }],
      body2: ['0.875rem', {
        letterSpacing: 0.25,
      }],
      button: ['0.875rem'],
      caption: ['0.75rem', {
        letterSpacing: 0.4,
      }],
      overline: ['0.625rem', {
        letterSpacing: 0.5,
      }],
    },
    spacing: {
      '0.5': '4px',
      '1': '8px',
      '1.5': '12px',
      '2': '16px',
      '2.5': '20px',
      '3': '24px',
      '4': '32px'
    },
    borderRadius: {
      '0.5': '4px',
      '1': '8px',
      '1.5': '12px',
      '2': '16px',
      '2.5': '20px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
