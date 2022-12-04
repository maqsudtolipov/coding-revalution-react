import { useState } from "react";
import "./app.css";

function App(props) {
  const [count, setCount] = useState(props.initialCount);

  // const addOne = () => {
  //   setCount(count + 1);
  // };

  const minusOne = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const reset = () => {
    setCount(props.initialCount);
  }

  return (
    <div>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Plus one</button>
      <button onClick={minusOne}>Minus one</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
