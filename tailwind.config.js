module.exports = {
  content: [
    './_includes/**/*.{html,md,js}',
    './_layouts/**/*.{html,md,js}',
    './_*/**/*.{html,md,js}',
    '!./_site/**/*.{html,md,js}',
    './*.{html,md,js}'
  ],
  theme: {
    extend: {      
    },
    container: {
      center: true,
      padding: '1rem',
    },
},
  plugins: [],
}
