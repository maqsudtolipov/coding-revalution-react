import { Button, Input, Text, Box, List } from 'dracula-ui';
import { useState, useContext } from 'react';
import { useRef } from 'react';
import { MyContext } from '../context';

const Stage1 = () => {
  const context = useContext(MyContext);

  const [error, setError] = useState([false, '']);

  const textInput = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const value = textInput.current.value;
    const validate = validateInput(value);

    if (validate) {
      setError([false, '']);
      context.addPlayer(value);
      textInput.current.value = '';
    }
  };

  console.log(context.state);

  const validateInput = (value) => {
    if (value === '' || value.length < 3) {
      setError([true, 'Please enter a valid value']);
      return false;
    }

    return true;
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <Input
          type='text'
          placeholder='Add player name'
          color='green'
          mt='xs'
          ref={textInput}
        />

        {error[0] ? <Text>{error[1]}</Text> : null}
        <br />

        <Button type='submit' color='yellowPink' mt='sm'>
          Add
        </Button>
      </form>

      {context.state.players && context.state.players.length > 0 ? (
        <>
          <Box color='purpleCyan' rounded='lg' mt='md' p='sm'>
            <List>
              {context.state.players.map((player, id) => (
                <li key={id} className='drac-text'>
                  {player}{' '}
                  <Button
                    onClick={() => context.removePlayer(id)}
                    color='yellowPink'
                  >
                    Remove
                  </Button>
                </li>
              ))}
            </List>
          </Box>{' '}
          <div className='edge-buttons'>
            <Button color='yellowPink' size='lg' onClick={() => context.next()}>
              NEXT
            </Button>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Stage1;
