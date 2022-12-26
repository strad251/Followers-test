export const theme = Object.freeze({
  colors: {
    accent: '#2196F3',
    white: '#ffffff',
    grey: '#9e9e9e',
    light: '#f2f2f2',
    black: '#212121',
    mainBackground: '#333',
    tagBackground: ['linear-gradient(to bottom, #FFD194, #D1913C)'],
    random: () => `#${Math.floor(Math.random() * 16777215).toString(16)}`,
  },
  fontSizes: {
    small: '14px',
    medium: '18px',
    large: '22px',
  },
  spacing: value => `${4 * value}px`,
  shadows: {
    small: '0 5px 7px -1px rgba(51, 51, 51, 0.23)',
    regular: 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;',
  },
  animation: {
    cubicBezier: '0.25s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },

  media: {
    mobile: '@media screen and (min-width: 480px)',
    tablet: ' @media screen and (min-width: 768px)',
    desktop: '@media screen and (min-width: 1200px)',
  },
});