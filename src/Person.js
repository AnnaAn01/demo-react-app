import React from "react";

function Person(props) {
  const name = props.name;
  return (
    <div>
      <h1>Welcome to this simple react project!</h1>
      <p>My name is {name}</p>
    </div>
  );
}

export default Person;
