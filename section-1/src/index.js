import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  return (
    <div className='hey'>
      <h1>Hello 🚚</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
