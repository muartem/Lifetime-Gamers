export const parameters = {
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#EDF4F7'
      },
      {
        name: 'dark',
        value: '#010a13'
      },
      {
        name: 'backdrop',
        value: 'rgb(0, 0, 0, 0.5)'
      }
    ]
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}
