import Users from "./components/Users";
import { MyProvider } from "./context";

const App = () => {
  return (
    <MyProvider>
      <Users />
    </MyProvider>
  );
};

export default App;
