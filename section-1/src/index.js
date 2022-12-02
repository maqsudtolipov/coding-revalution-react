import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import NewsList from "./components/NewsList";
import Footer from "./components/Footer";

import "./styles/style.css";
import JSON from "./db.json";
import Life from "./components/LIfecycles";

class App extends Component {
  state = {
    unmount: true,
    active: false,
    news: JSON,
    filtered: [],
    footerText: "I am a happy footer",
  };

  getKeywords = (event) => {
    console.log(event.target.value);
    let keywords = event.target.value;
    let filtered = this.state.news.filter((item) => {
      return item.title.indexOf(keywords) > -1;
    });
    this.setState({
      filtered,
    });
  };

  changeColor = () => {
    this.setState({
      active: this.state.active ? false : true,
    });
  };

  render() {
    const { active, filtered, news, footerText } = this.state;

    return (
      <div className='hey'>
        <Header
          active={active}
          changeColor={this.changeColor}
          keyword={this.getKeywords}
        />
        <NewsList news={filtered.length === 0 ? news : filtered}>
          <br />
          <h1>I am a children</h1>
        </NewsList>
        {this.state.unmount ? <Life /> : null}
        <button
          onClick={() => {
            this.setState({ unmount: !this.state.unmount });
          }}
        >
          Actions
        </button>
        <Footer footerText={footerText} />
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
