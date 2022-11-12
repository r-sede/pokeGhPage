/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  safelist: [
    {
      pattern: /(bg|border|text)-(yellow|electric|psychic|green|bug|grass|blue|water|ice|red|fire|orange|normal|purple|ghost|poison|fairy|ground|fighting|rock|dragon|dark|steel)/,
      variants: ['hover', 'focus'],
    },
    {
      pattern: /(bg|border|text)-(yellow|electric|psychic|green|bug|grass|blue|water|ice|red|fire|orange|normal|purple|ghost|poison|fairy|ground|fighting|rock|dragon|dark|steel)(\/50)/,
      variants: ['hover', 'focus'],
    },
  ],
  theme: {
    screens: {
      'xs': '500px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1260px',
      // '2xl': '1921px',
    },
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1260px',
        // '2xl': '1921px',
      },
      padding: {
        DEFAULT: '25px',
        xs: '25px',
        sm: '1rem',
        md: '1rem',
        lg: '1rem',
        xl: '30px',
        // '2xl': '30px',
      },
      'center': true,
    },
    extend: {
      colors: {
        yellow: '#e6bc2f',
        electric: '#e6bc2f',
        psychic: '#e6bc2f',
        green: '#4dad5b',
        bug: '#4dad5b',
        grass: '#4dad5b',
        blue: '#3161b8',
        steel: '#5a86bd',
        water: '#3161b8',
        dragon: '#3161b8',
        ice: '#3161b8',
        red: '#d9654a',
        fire: '#d9654a',
        orange: '#ee6b2f',
        normal: '#ee6b2f',
        purple: '#855ac9',
        ghost: '#855ac9',
        poison: '#855ac9',
        fairy: '#c95abe',
        ground: '#C7AA79',
        fighting: '#C7AA79',
        rock: '#C7AA79',
        dark: '#28221d',
      }
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
    },
  },
  plugins: [],
}
