import { ThemeProvider } from '@emotion/react';
import './App.css';

import { colors, createTheme } from '@mui/material';

const theme = createTheme({
  status: {
    danger: "#e53e3e"
  },
  palette: {
    secondary: {
      main: colors.orange[500]
    }
  }, 
  
})
function App() {
  return (
    <ThemeProvider theme={theme}>
      <div></div>
    </ThemeProvider>
  );
}

export default App;
