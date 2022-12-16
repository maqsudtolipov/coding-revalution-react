import { MyContext } from "../context";
import { useContext } from "react";

const UserItem = (props) => {
  const context = useContext(MyContext);

  return (
    <>
      {context.active &&
        context.users.map((user) => (
          <div key={user.id}>
            <span>Name: {user.name}</span>
          </div>
        ))}
      <hr />
      <button onClick={context.toggleActive}>Toggle it!!!</button>
    </>
  );
};

export default UserItem;
