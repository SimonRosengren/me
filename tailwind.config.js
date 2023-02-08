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
        'poppins': ['Poppins', 'sans-serif']
      },
      extend: {
        colors: {
          main: {
            100: '#0f0f0f',
            200: '#080808'
          },
          fontFamily: {
            'poppins': ['Poppins', 'sans-serif']
          },
          secondary: {
            100: '#d9d9d9'
          }
        },
      },
    }
  };