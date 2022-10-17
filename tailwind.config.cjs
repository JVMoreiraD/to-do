/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      },
      fontSize: {
        'xs': 12,
        'sm': 14,
        'md': 16,
        'lg': 20,
        'xl': 24,
        '2xl': 32
      },
      fontWeight: {},
      colors: {
        'transparent': 'transparent',
        'danger': "#E25858",
        'black': '#000000',
        'white': '#FFFFFF',
        'background': "#454545",
        gray: {
          700: '#0D0D0D',
          600: '#1a1a1a',
          500: '#262626',
          400: '#333333',
          300: '#808080',
          200: '#D9D9D9',
          100: '#F2F2F2'
        },
        blue: {
          'normal': '#4ea8de',
          'dark': '#1e6f9f',
        },
        purple: {
          'normal': '#8284fa',
          'dark': "#5e60ce",
        }


      },
    },
    plugins: [],
  }
}