module.exports = {
  content: [`./views/**/*.ejs`],
  theme: {
    extend: {
      colors: {
        primary: '#483D8B',
        secondary: '#E6E6FA',
        accent: '#FFE4B5',
        white: '#FFFAFA',
      },
      fontFamily: {
        sans: ['Helvetica', 'sans-serif'],
      },
    },
  },
plugins: [require('daisyui')],

}

