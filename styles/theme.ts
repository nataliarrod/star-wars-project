import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    common: {
      black: '#FFE919',
      white: '#ffffff',
    },
    primary: {
      light: '#B3E5FC',
      main: '#03A9F4',
      dark: '#0288D1',
      contrastText: '#212121',
    },
  }
});

export default theme;