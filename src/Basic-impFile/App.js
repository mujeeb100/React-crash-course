import React, { useEffect, useState, useMemo } from "react";

function App() {
  const [count, setCount] = useState(5);
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);
  // useMemo Starts here
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);

  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  // useEffect in reactJS
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);

  // for decrement count
  function decrementCount() {
    setCount(count - 1);
  }

  //for incrementCount
  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <div className="App">
      {/* use memon example in input type */}
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>

      {/* increment and decrement when click on button */}
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>

      {/* another one example of useState start */}
      <button onClick={() => setResourceType("posts")}>Posts</button>
      <button onClick={() => setResourceType("users")}>Mujeeb</button>
      <button onClick={() => setResourceType("comments")}>ansari</button>
      <h1>{resourceType}</h1>
      {items.map((item) => {
        return <pre>{JSON.stringify(item)}</pre>;
      })}
    </div>
  );
}

function slowFunction(num) {
  for (let i = 0; i < 100000; i++) {
    return num * 2;
  }
}

export default App;
