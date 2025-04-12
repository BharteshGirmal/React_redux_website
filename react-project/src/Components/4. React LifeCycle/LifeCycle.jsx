import React, { Component } from "react";

class Lifecycle extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.messages = []; // Use a class property for messages
  }

  componentDidMount() {
    this.messages.push("ComponentDidMount: Component has been mounted");
    console.log(this.messages[this.messages.length - 1]); // Log the message
  }

  shouldComponentUpdate(nextProps, nextState) {
    this.messages.push("ShouldComponentUpdate: Deciding whether to update");
    console.log(this.messages[this.messages.length - 1]); // Log the message
    return true; // Always update
  }

  componentDidUpdate(prevProps, prevState) {
    this.messages.push("ComponentDidUpdate: Component has been updated");
    console.log(this.messages[this.messages.length - 1]); // Log the message
  }

  componentWillUnmount() {
    this.messages.push("ComponentWillUnmount: Component is being removed");
    console.log(this.messages[this.messages.length - 1]); // Log the message
  }

  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <h1>React Lifecycle Demo</h1>
        <button className="btn btn-secondary" onClick={this.handleIncrement}>
          Increment Count ({this.state.count})
        </button>
        <h2>Lifecycle Messages:</h2>
        <ul>
          {this.messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Lifecycle;
