import { useEffect, useState } from "react";
import "./app.css";
import Post from "./Post";

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

  const hey = "Hello";
  const alertSomething = () => alert("Something");

  // useEffect(() => {
  //   console.log(state);
  // }, [state]);
  //
  // useEffect(() => {
  //   console.log(posts);
  // }, [posts]);

  // useEffect(() => {
  //   console.log("Mounted");
  // }, []);

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

  const removePosts = () => {
    setPosts([]);
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
      {posts.map((item, i) => (
        <Post item={item} key={i} />
      ))}
      <button onClick={addOnePost}>Add one more</button>
      <button onClick={removePosts}>Remove posts</button>
    </div>
  );
}

export default App;
