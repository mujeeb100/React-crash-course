import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { Routes, Route } from "react-router-dom";
// import AllMeetup from "./pages/AllMeetup";
// import NewMeetup from "./pages/NewMeetup";
// import Favaroite from "./pages/Favaroite";
// import Layout from "./components/layout/Layout";
// import Counter from "./Counter";
function App() {
  const counterIncrement = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  // actions
  const handleSubmit = () => {
    dispatch({ type: "increment", payload: 5 });
  };

  // redux decrement
  const handleDecrement = () => {
    dispatch({ type: "decrement", payload: -1 });
  };
  // increment redux
  const handleIncrement = () => {
    dispatch({ type: "increment", payload: 1 });
  };

  const handleMultiply = () => {
    dispatch({ type: "multiply", payload: 5 * 2 });
  };
  const handleReset = () => {
    dispatch({ type: "reset" });
  };
  return (
    <div>
      {counterIncrement}

      <button onClick={handleSubmit}>Dispath button</button>
      <br />
      <button onClick={handleDecrement}>Decrement </button>
      <br />

      <button onClick={handleIncrement}>Increment</button>
      <br />

      <button onClick={handleMultiply}> Multiply</button>
      <br />
      <button onClick={handleReset}> Reset</button>
    </div>

    // <Counter />
    // <Layout>
    //   <Routes>
    //     <Route path="/" element={<AllMeetup />} />
    //     <Route path="/new-meetup" element={<NewMeetup />} />
    //     <Route path="/favaroite" element={<Favaroite />} />
    //   </Routes>
    // </Layout>
  );
}

export default App;
