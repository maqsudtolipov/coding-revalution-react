import React, { Component } from "react";

class Life extends Component {
  constructor(props) {
    super(props);
    console.log("1-constructor");

    this.state = { name: "Francies" };
  }

  static getDerivedStateFromProps() {
    console.log("2-getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("4-componentDidMount");
  }

  componentWillUnmount() {
    console.log("x-componentWillUnmount");
  }

  render() {
    console.log("3-return");
    return <>Life</>;
  }
}

export default Life;
