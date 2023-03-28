import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: 'Louis-George, sans-serif',
  },
});

export default theme;
