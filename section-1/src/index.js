import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';

import './styles/style.css'

const App = () => {
  return (
    <div className='hey'>
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
