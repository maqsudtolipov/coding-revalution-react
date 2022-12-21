import { NextUIProvider, createTheme } from '@nextui-org/react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const theme = createTheme({
  type: 'dark', // light / dark
  className: '', // optional
  theme: {
    colors: {},
    space: {},
    fontSizes: {},
    fonts: {},
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
});

function App() {
  return <NextUIProvider theme={theme}>a</NextUIProvider>;
}

export default App;
