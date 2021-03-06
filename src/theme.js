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
    type: 'dark',
  },
  typography: {
    fontFamily: '"Epilogue"',
    h1: {
      fontFamily: '"Roboto Slab", "Helvetica", "Arial", serif',
      fontWeight: 100,
      fontSize: "6rem",
      lineHeight: 1.167,
      color: '#fff',
    },
    h2: {
      fontFamily: '"Roboto Slab", "Helvetica", "Arial", serif',
      fontWeight: 300,
      color: 'rgba(255, 255, 255, 0.9)',
    },
    h3: {
      fontFamily: '"Roboto Slab", "Helvetica", "Arial", serif',
      fontWeight: 300,
      color: 'rgba(255, 255, 255, 0.85)',
    },
    h4: {
      fontFamily: '"Roboto Slab", "Helvetica", "Arial", serif',
      fontWeight: 300,
      color: '#fff',
    },
    body1: {
      fontFamily: '"Epilogue", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.5,
      color: 'rgba(255, 255, 255, 0.7)',
    },
    body2: {
      fontFamily: '"Epilogue", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.5,
      color: 'rgba(255, 255, 255, 0.7)',
    }
  },
  shape: {
    borderRadius: 0,
  }
});

export default responsiveFontSizes(theme);