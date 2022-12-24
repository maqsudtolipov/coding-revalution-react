import { useState } from 'react';
import { Transition } from 'react-transition-group';

const TransitionComp = () => {
  const [show, setShow] = useState(true);

  const toggleDiv = () => {
    setShow(!show ? true : false);
  };

  return (
    <div>
      <Transition
        in={show}
        timeout={{
          enter: 2000,
          exit: 50,
        }}
        // enter={false}
        // exit={false}
        onEnter={() => {
          console.log('ENTER');
        }}
        onExit={() => {
          console.log('EXIT');
        }}
      >
        {(state) => (
          <div
            className={`square square-${state}`}
          >{`square square-${state}`}</div>
        )}
      </Transition>
      <button className='btn btn-primary' onClick={toggleDiv}>
        Toggle show
      </button>
    </div>
  );
};

export default TransitionComp;
