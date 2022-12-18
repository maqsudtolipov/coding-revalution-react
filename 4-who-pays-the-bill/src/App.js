import './App.css';
import 'dracula-ui/styles/dracula-ui.css';
import 'react-toastify/dist/ReactToastify.css';
import { Heading } from 'dracula-ui';
import Stage1 from './components/Stage1';
import Stage2 from './components/Stage2';
import { MyContext } from './context';
import { useContext } from 'react';

const App = () => {
  const context = useContext(MyContext);

  return (
    <div className='container'>
      <Heading size='2xl' color='pink'>Who pays the bill?</Heading>

      {context.state.stage === 1 ? <Stage1 /> : <Stage2 />}
    </div>
  );
};

export default App;
