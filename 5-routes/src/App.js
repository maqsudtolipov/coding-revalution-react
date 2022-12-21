import {
  NextUIProvider,
  createTheme,
  Container,
  Grid,
  Text,
} from '@nextui-org/react';

import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';
import Posts from './components/Posts';
import './App.css';
import Profile from './components/Profile';
import Home from './components/Home';
import Post from './components/Post';

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
          <Grid.Container
            display='flex'
            justify='space-between'
            css={{
              marginBottom: 24,
            }}
          >
            <Grid>
              <Text>My App</Text>
            </Grid>
            <Grid>
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? {
                        color: '#17c964',
                        borderBottom: '3px solid #17c964',
                        marginRight: 12,
                      }
                    : {
                        marginRight: 12,
                      }
                }
                to='/'
              >
                Home
              </NavLink>
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
            <Route path='posts/:id' element={<Post />} />
            <Route path='profile' element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </NextUIProvider>
  );
}

export default App;
