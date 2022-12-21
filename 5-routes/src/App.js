import {
  NextUIProvider,
  createTheme,
  Container,
  Grid,
  Text,
} from '@nextui-org/react';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
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
          <Grid.Container display='flex' justify='space-between'>
            <Grid>
              <Text>My App</Text>
            </Grid>
            <Grid>
              <Link
                style={{
                  marginRight: 12,
                }}
                to='/'
              >
                Home
              </Link>
              <Link
                style={{
                  marginRight: 12,
                }}
                to='/posts'
              >
                Posts
              </Link>
              <Link
                to={{
                  pathname: 'profile',
                  hash: 'steve',
                  search: '?profile=true',
                }}
              >
                Profile
              </Link>
            </Grid>
          </Grid.Container>
          <header></header>
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
