import { useState } from "react";

export default function StateLifting() {
  const [name, setName] = useState("");
  return (
    <div>
      <Display name={name} />
      <NameInput setName={setName} />
    </div>
  );
}

const NameInput = (prop) => {
  return <input type="text" onChange={(e) => prop.setName(e.target.value)} />;
};

const Display = (prop) => {
  return (
    <div className="alert alert-success">The enterd value is : {prop.name}</div>
  );
};
