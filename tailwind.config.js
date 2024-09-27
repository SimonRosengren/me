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
      lg: '1330px',
      xl: '1680px',
    },
    extend: {
      colors: {
        neutral: {
          '000': '#ffffff',
          100: '#ededed',
          200: '#505050',
          300: '#0f0f0f',
          400: '#030202',
          500: '#000000'
        },
        red: {
          100: '#C66F66',
          200: '#9D453C',
          300: '#7d261e',
          400: '#560E07',
          500: '#320500'
        }, 
      },
      fontFamily: {
        'display': ['NeueMontreal', 'san-serif'],
        'sans': ['NeueMontreal', 'san-serif'],
        'serif': ['Prata']
      },
      borderRadius: {
        '8xl': '4rem',
        '9xl': '5rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
  css: ['@/assets/css/fonts.css'],
};