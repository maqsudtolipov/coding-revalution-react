import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import NewsList from './components/NewsList';
import Footer from './components/Footer';

import './styles/style.css';
import JSON from './db.json';

class App extends Component {
  state = {
    news: JSON,
    footerText: 'I am a happy footer'
  };

  render() {
    return (
      <div className='hey'>
        <Header />
        <NewsList news={this.state.news} />
        <Footer footerText={this.state.footerText} />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
