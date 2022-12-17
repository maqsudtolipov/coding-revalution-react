import React from 'react';

const MyContext = React.createContext();

class MyProvider extends React.Component {
  state = {
    stage: 1,
    players: [],
  };

  addPlayer = (name) => {
    this.setState((prevState) => ({
      players: [...prevState.players, name],
    }));
  };

  render() {
    return (
      <>
        <MyContext.Provider
          value={{
            state: this.state,
            addPlayer: this.addPlayer,
          }}
        >
          {this.props.children}
        </MyContext.Provider>
      </>
    );
  }
}

export { MyContext, MyProvider };
