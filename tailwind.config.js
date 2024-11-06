/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './content/blog/**/*.{md,js,vue,ts}'
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
          100: '#f2f2f2',
          200: '#e6e6e6',
          300: '#cccccc',
          400: '#b0b0b0',
          500: '#959595',
          600: '#7a7a7a',
          700: '#606060',
          800: '#454545',
          900: '#2a2a2a',
          1000: '#0f0f0f'
        },
        red: {
          100: '#f2e6e0',  // Lightest red-orange (complementary to #f2f2f2)
          200: '#e6cfc0',
          300: '#d9b7a0',
          400: '#cc9f80',
          500: '#bf8760',
          600: '#b26f40',
          700: '#a55820',
          800: '#994000',
          900: '#7a3300',
          1000: '#5c2600'  // Darkest red-orange (complementary to #0f0f0f)
        },
        blue: {
          100: '#e0e6f2',  // Lightest blue (complementary to #f2f2f2)
          200: '#c0cfe6',
          300: '#a0b7d9',
          400: '#809fcc',
          500: '#6087bf',
          600: '#406fb2',
          700: '#2058a5',
          800: '#004099',
          900: '#00337a',
          1000: '#00265c'  // Darkest blue (complementary to #0f0f0f)
        }
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