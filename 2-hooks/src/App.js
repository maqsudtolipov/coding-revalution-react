import { useState } from "react";
import "./app.css";

function App(props) {
  const [state, setState] = useState({
    count: props.initialCount,
    user: "Franklin",
  });

  const [posts, setPosts] = useState([
    {
      name: "Super awsome hooks",
      body: "Everything you need for your hooks",
    },
  ]);

  // const addOne = () => {
  //   setCount(count + 1);
  // };

  const minusOne = () => {
    setState((prevState) => {
      return { ...prevState, count: prevState.count - 1 };
    });
  };

  const addOnePost = () => {
    let newPost = {
      name: "🍬 is bad",
      body: "☕ is good",
    };

    setPosts([...posts, newPost]);
  };

  return (
    <div>
      <h1>{state.user}</h1>
      <h3>Count: {state.count}</h3>
      <button onClick={() => setState({ ...state, count: state.count + 1 })}>
        Plus one
      </button>
      <button onClick={minusOne}>Minus one</button>
      <button onClick={() => setState({ ...state, count: props.initialCount })}>
        Reset
      </button>

      <hr />
      {posts.map((post, i) => (
        <div>
          <div>Name: {post.name}</div>
          <div>Body: {post.body}</div>
          <hr />
        </div>
      ))}
      <button onClick={addOnePost}>Add one more</button>
    </div>
  );
}

export default App;
