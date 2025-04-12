import React from "react";

const ExampleComponent = () => {
  const functionalComponentCode = `
import React from "react";

const FunctionalComponent = () => {
  return (
    <div>
      <h3>This is a Functional Component Example</h3>
    </div>
  );
};

export default ExampleComponent;
  `;

  return (
    <div>
      <h3>This is a Functional Component Example</h3>
      <h4>Component Code:</h4>
      <pre>
        <code>{functionalComponentCode}</code>
      </pre>
    </div>
  );
};

export default ExampleComponent;
