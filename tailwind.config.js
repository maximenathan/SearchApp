// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
      rose: colors.rose,
      green: colors.lime,
      yellow: colors.amber,
      purple: colors.purple
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    },
    extend: {
      spacing: {
        128: '32rem',
        144: '36rem'
      },
      borderRadius: {
        '4xl': '2rem'
      },
      height: {
        '5v': '5vh',
        '10v': '10vh',
        '20v': '20vh',
        '30v': '30vh',
        '40v': '40vh',
        '50v': '50vh',
        '60v': '60vh',
        '70v': '70vh',
        '75v': '75vh',
        '80v': '80vh',
        '90v': '90vh',
        '100v': '100vh'
      }
    }
  },
  variants: {
    extend: {
      opacity: ['disabled']
    }
  },
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/forms'), require('tailwind-scrollbar')]
};
