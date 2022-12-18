import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

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

  next = () => {
    const { players } = this.state;

    if (players.length < 2) {
      toast.error('You need at least two players', {
        position: 'top-left',
        autoClose: 2000,
        theme: 'dark',
      });
    } else {
      this.setState(
        {
          stage: 2,
        },
        () => {
          setTimeout(() => {
            console.log('Looser');
          }, 2000);
        }
      );
    }
  };

  render() {
    return (
      <>
        <MyContext.Provider
          value={{
            state: this.state,
            addPlayer: this.addPlayer,
            removePlayer: this.removePlayer,
            next: this.next,
          }}
        >
          {this.props.children}
          <ToastContainer />
        </MyContext.Provider>
      </>
    );
  }
}

export { MyContext, MyProvider };
