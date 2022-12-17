import { Button, Input } from 'dracula-ui';
import { useRef } from 'react';

const Stage1 = () => {
  const textInput = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(textInput.current.value);
    const value = textInput.current.value;
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
        <Button type='submit' color='yellow' mt='sm'>
          Add
        </Button>
      </form>
    </>
  );
};

export default Stage1;
