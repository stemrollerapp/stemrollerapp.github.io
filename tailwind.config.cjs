const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{html,js,svelte}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Mukta', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
