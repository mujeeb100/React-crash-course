import React, { useState, useEffect } from "react";

// update functionality of the STATE

function State() {
  const [value, setValue] = useState(0);
  //   useEffect used here
  useEffect(() => {
    console.log("State");
  });

  function updatecount() {
    setValue(value + 1);
  }
  function updatecountless() {
    setValue(value - 1);
  }

  function updateData() {
    setValue("");
  }

  var x = 10;
  function updateState() {
    x = 15;
  }
  console.log(x);

  return (
    <div className="App">
      <h1>Learning State {x}</h1>
      <h1>Learning UseState Hooks {value}</h1>
      <button onClick={updatecount}>+++++</button>
      <button onClick={updatecountless}>-----</button>
      <button onClick={updateData}>Click me useEffect</button>
      <button onClick={updateState}>click Me</button>
    </div>
  );
}

export default State;
