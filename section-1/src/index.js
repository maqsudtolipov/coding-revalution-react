import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import NewsList from './components/NewsList';

import './styles/style.css';
import JSON from './db.json';

class App extends Component {
  state = {
    news: JSON,
  };

  render() {
    return (
      <div className='hey'>
        <Header />
        <NewsList news={this.state.news} />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
