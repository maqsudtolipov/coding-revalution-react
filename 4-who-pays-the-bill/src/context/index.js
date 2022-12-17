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

  removePlayer = (id) => {
    let newArr = this.state.players;
    newArr.splice(id, 1);
    this.setState((prevState) => ({
      players: newArr,
    }));
  };

  render() {
    return (
      <>
        <MyContext.Provider
          value={{
            state: this.state,
            addPlayer: this.addPlayer,
            removePlayer: this.removePlayer,
          }}
        >
          {this.props.children}
        </MyContext.Provider>
      </>
    );
  }
}

export { MyContext, MyProvider };
