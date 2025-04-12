import React from "react";

export default function Argument() {
  const handleClick = (name) => {
    alert(`Event reciving name from Function Argument value is :${name} `);
  };
  return (
    <div className="container p-4 text-center">
      <p>
        <b>Passing Argument from Function Component</b>
      </p>
      <button
        className="btn btn-md btn-warning"
        onClick={() => handleClick("Girmal")}
      >
        Click Here
      </button>
    </div>
  );
}

export function MyComponent() {
  const handleClick = (name, event) => {
    alert(`Hello, ${name}! Event Type: ${event.type}`);
  };

  return (
    <div className="container p-4 text-center">
      <p>
        <b>Passing Argument and Event</b>
      </p>
      <button
        className="btn btn-md btn-info"
        onClick={(e) => handleClick("John", e)}
      >
        Click Me
      </button>
      ;
    </div>
  );
}

export class ClassArgument extends React.Component {
  handleClick(name) {
    alert(`Event reciving name from ClassArgument value is :${name} `);
  }
  render() {
    return (
      <div className="container p-4 text-center">
        <p>
          <b>Passing Argument from Class Component</b>
        </p>
        <button
          className="btn btn-md btn-warning"
          onClick={this.handleClick.bind(this, "Bhartesh")}
        >
          Click Here
        </button>
      </div>
    );
  }
}
