import React, { Component } from 'react';

class Header extends Component {
  state = {
    keywords: '',
  };

  inputChange = (e) => {
    this.setState({
      keywords: e.target.value,
    });
    console.log(e.target.value);
  };

  render() {
    return (
      <header>
        <div className='logo'>Logo</div>
        <input type='text' onChange={(e) => this.inputChange(e)} />
      </header>
    );
  }
}

export default Header;
