import { Button, Input, Text } from 'dracula-ui';
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

        <Button type='submit' color='yellow' mt='sm'>
          Add
        </Button>
      </form>
    </>
  );
};

export default Stage1;
