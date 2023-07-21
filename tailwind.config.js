/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    screens: {
      xs: '300px',
      sm: '768px',
      md: '920px',
      lg: '1330px'
    },
    fontFamily: {
      'baumans': ['Baumans', 'sans-serif']
    },
    extend: {
      colors: {
        main: {
          100: '#0f0f0f',
          200: '#080808'
        },
        fontFamily: {
          'baumans': ['Baumans', 'sans-serif']
        },
        secondary: {
          100: '#F5EFDF'
        },
        accent: {
          100: '#d18100'
        },
        'accent-red': {
          100: '#7d261e'
        },
        'text-yellow': '#e6dcb8'
      },
      borderRadius: {
        '8xl': '4rem',
        '9xl': '5rem'
      }
    },
  }
};