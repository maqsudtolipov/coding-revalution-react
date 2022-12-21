import { NextUIProvider, createTheme, Container } from '@nextui-org/react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Posts from './components/Posts';
import './App.css';
import Profile from './components/Profile';
import Home from './components/Home';

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
  return (
    <NextUIProvider theme={theme}>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='posts' element={<Posts />} />
            <Route path='profile' element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </NextUIProvider>
  );
}

export default App;
