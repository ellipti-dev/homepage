import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#825db0',
      main: '#bb86fc',
      dark: '#c89efc',
    },
    secondary: {
      light: '#02988a',
      main: '#03dac6',
      drak: '#35e1d1',
    },
    text: {
      primary: '#292929',
      secondary: '#4D5256',
    }
  },
  typography: {
    fontFamily: '"Roboto", "Roboto Slab"',
    htmlFontSize: 14,
    h1: {
      fontWeight: 100,
      fontSize: "6rem",
      lineHeight: 1.167,
    },
    h2: {
      fontWeight: 300,
    },
    h3: {
      fontWeight: 300,
    },
    h4: {
      fontWeight: 300,
    },
    body1: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    body2: {
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.5,
    },
    button: {
      textTransform: 'none'
    }
  },
  shape: {
    borderRadius: 0,
  }
});

export default responsiveFontSizes(theme);