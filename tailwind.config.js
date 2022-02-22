const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./**/*.html'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      fontFamily: {
        raleway: ['Raleway', ...fontFamily.mono],
        opensans: ['Open Sans', ...fontFamily.sans],
      },
      fontSize: {
        '2xs': '.55rem',
      },
      colors: {
        'primary-dark': 'hsl(243, 87%, 12%)',
        'primary-desa': 'hsl(238, 22%, 44%)',

        'accent-blue': 'hsl(224, 93%, 58%)',
        'accent-green': 'hsl(170, 45%, 43%)',

        'neutral-blue': 'hsl(240, 75%, 98%)',
        'neutral-gray': 'hsl(0, 0%, 75%)',

        'olive': 'hsl(228, 45%, 44%)'
      },
    },
  },
}