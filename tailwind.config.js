module.exports = {
  content: ['./index.html', './src/app/**/*.js'],
  theme: {
    screens: {
      'sm': '500px',
      'md': '768px',
      'lg': '1000px',
      'xl': '1110px',
    },
    extend: {
      colors: {
        // PRIMARY COLORS
        BrightRed: 'hsl(12, 88%, 59%)',
        DarkBlue: 'hsl(228, 39%, 23%)',

        // NEUTRALS
        DarkGrayishBlue: 'hsl(227, 12%, 61%)',
        VeryDarkBlue: 'hsl(233, 12%, 13%)',
        VeryPaleRed: 'hsl(13, 100%, 96%)',
        VeryLightGray: 'hsl(0, 0%, 98%)',
      },
    },
  },
  plugins: [],
};
