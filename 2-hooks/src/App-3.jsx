import React, { useRef } from "react";

const App = () => {
  const textInput = useRef();
  const triggerHandler = () => {
    console.log(textInput.current.value);
  };

  return (
    <>
      <h1>Form:</h1>
      <InputCom ref={textInput} />
      <button onClick={triggerHandler}>Trigger</button>
    </>
  );
};

const InputCom = React.forwardRef((props, ref) => {
  return <input ref={ref} />;
});

export default App;
