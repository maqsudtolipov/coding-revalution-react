import React, { Component } from 'react';

class Header extends Component {
  inputChange = (e) => {
    console.log(e.target.value);
  };

  render() {
    return (
      <header>
        <div
          className='logo'
          onClick={() => {
            console.log('I was clicked');
          }}
        >
          Logo
        </div>
        <input type='text' onChange={(e) => this.inputChange(e)} />
      </header>
    );
  }
}

export default Header;
