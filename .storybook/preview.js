import './index.css';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered',
  backgrounds: {
    default: 'base',
    values: [
      {
        name: 'base',
        value: '#ffffff',
      },
      {
        name: 'primary',
        value: '#5b31e2',
      },
      {
        name: 'secondary',
        value: '#e23195',
      },
    ],
  },
}
