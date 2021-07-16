import { UiGlobalStyles } from '../src/styles'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered',
}

export const decorators = [
  Story => (
    <>
      <UiGlobalStyles />
      <Story />
    </>
  )
]
