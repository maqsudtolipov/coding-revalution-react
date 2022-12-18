import { useContext } from 'react';
import { MyContext } from '../context';
import { Heading, Button } from 'dracula-ui';

const Stage2 = () => {
  const context = useContext(MyContext);

  return (
    <>
      <Heading size='lg' mt='xs'>
        The looser is 😢: {context.state.result || '. . .'}
      </Heading>
      <div className='edge-buttons'>
      <Button color='yellowPink' size='lg' mr='sm' onClick={() => context.generateLooser()}>
          GET NEW LOOSER
        </Button>
        <Button color='yellowPink' size='lg' onClick={() => context.resetGame()}>
          START OVER
        </Button>
      </div>
    </>
  );
};

export default Stage2;
