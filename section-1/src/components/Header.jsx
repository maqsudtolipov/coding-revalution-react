import React, { Component } from "react";

class Header extends Component {
  state = {
    active: false,
    keywords: "",
  };

  inputChange = (e) => {
    this.setState({
      keywords: e.target.value,
    });
  };

  changeColor = () => {
    this.setState({
      active: this.state.active ? false : true,
    });
  };

  render() {
    return (
      // <header style={{ background: `${this.state.active ? "red" : "blue"}` }}>
      <header className={this.state.active ? "active" : "not-active"}>
        <div className='logo'>Logo</div>
        <input type='text' onChange={(e) => this.inputChange(e)} />
        <button
          onClick={() => {
            this.changeColor();
          }}
        >
          Change it
        </button>
      </header>
    );
  }
}

export default Header;
