import { Component } from "react";

class StateUpdateUsingClass extends Component {
  constructor() {
    super();
    this.state = { name: "Bhartesh", age: 26 };
  }

  changeAge = () => {
    this.setState((prev) => ({ ...prev, age: prev.age + 1 }));
  };

  render() {
    return (
      <div>
        <h4 className="bg-primary text-light text center">Class setState</h4>
        <div className="alert alert-success">
          Name : {this.state.name} and Age is {this.state.age}
        </div>
        <button className="btn btn-info btn-sm" onClick={this.changeAge}>
          Change Age
        </button>
      </div>
    );
  }
}

export default StateUpdateUsingClass;
