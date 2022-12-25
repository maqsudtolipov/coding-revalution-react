import './App.css';
import img from './assets/popcorn.png';

import { useSelector, useDispatch } from 'react-redux';
import { Button, Text } from '@nextui-org/react';
import { addMovie } from './store/movies';
import { setType } from './store/users';

function App() {
  const movies = useSelector((state) => state.movies.list);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  return (
    <div className='app'>
      <Text h2>Movies</Text>
      <ul>
        {movies &&
          movies.map((movie) => (
            <li
              key={movie.id}
              style={{
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img
                src={img}
                style={{
                  height: '24px',
                  marginRight: '12px',
                }}
              />{' '}
              {movie.title}
            </li>
          ))}
      </ul>
      <br />
      <Button onClick={() => dispatch(addMovie({ id: 3, title: 'Batman' }))}>
        Add Movie
      </Button>
      <br />
      <Text h3>User type: {users.type}</Text>
      <Button onClick={() => dispatch(setType('Admin'))}>Set Type</Button>
    </div>
  );
}

export default App;
