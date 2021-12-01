import { extendTheme } from 'native-base'

const config = {
  useSystemColorMode: false,
  initialColorMode: 'light',
  initialColorDarkMode: 'dark'
}

const colors = {
  primary: {
    50: '#EEF2F6',
    100: '#DFCFE7',
    200: '#D8B1C1',
    300: '#C99292',
    400: '#9B74B9',
    500: '#9355AA',
    600: '#704488',
    700: '#663357',
    800: '#224244',
    900: '#000000'
  }
}

export default extendTheme({ config, colors })
