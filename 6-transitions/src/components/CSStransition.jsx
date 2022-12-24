import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

const CssTr = () => {
  const [show, setShow] = useState(true);

  const toggleDiv = () => {
    setShow(!show ? true : false);
  };

  return (
    <>
      <CSSTransition in={show} timeout={500} classNames='cssSq'>
        <div className='cssSq'>Holas</div>
      </CSSTransition>
      <button className='btn btn-primary' onClick={toggleDiv}>
        Toggle show
      </button>
    </>
  );
};

export default CssTr;
