import { useState, useCallback } from "react";
import Title from "./copmonents/Title";
import Count from "./copmonents/Count";
import CountBtn from "./copmonents/CountBtn";
import Age from "./copmonents/Age";
import AgeBtn from "./copmonents/AgeBtn";

const App = (props) => {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(10);

  const incrementCount = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const incrementAge = useCallback(() => {
    setAge((prevAge) => prevAge + 1);
  }, []);

  return (
    <div>
      <Title />
      <Count count={count} />
      <CountBtn handeCount={incrementCount} />
      <Age age={age} />
      <AgeBtn handleAge={incrementAge} />
    </div>
  );
};

export default App;
