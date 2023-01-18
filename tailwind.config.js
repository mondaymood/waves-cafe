module.exports = {
  content: [
    './_includes/**/*.{html,md,js}',
    './_layouts/**/*.{html,md,js}',
    './_*/**/*.{html,md,js}',
    '!./_site/**/*.{html,md,js}',
    './*.{html,md,js}'
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'navy': '#2A333F',
      'ocean': '#6B8394', 
      'sky': '#242C36',      
      'citrus': '#F5F0CE',
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
      serif: ['EB Garamond', 'serif'],
      display: ['Nightfall', 'serif'],
    },
},
  plugins: [],
}
