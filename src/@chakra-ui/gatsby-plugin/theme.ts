import { theme as defaultTheme } from '@chakra-ui/theme';

const theme = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    primary: {
      50: '#edf8e8',
      100: '#d2e5cb',
      200: '#b7d2ac',
      300: '#9bc08c',
      400: '#7fad6c',
      500: '#669453',
      600: '#4e733f',
      700: '#37522c',
      800: '#203119',
      900: '#051201',
    },
  },
};

export default theme;
