import { createStore } from "redux";
const obj = { counter: 0 };
// const obj1 = { counter1: 1 };

function reduxReducer(intialState = obj, action) {
  // actions for decrement Counter
  if (action.type === "decrement") {
    return {
      counter: intialState.counter + action.payload,
    };
  }

  // actions for incrementing counter
  if (action.type === "increment") {
    return {
      counter: intialState.counter + action.payload,
    };
  }

  // multiplt
  if (action.type === "multiply") {
    return {
      counter: intialState.counter + action.payload,
    };
  }

  // Reset the number
  if (action.type === "reset") {
    return {
      counter: 0,
      // counter: intialState.counter + action.payload,
    };
  }
  //   inttialState
  return {
    counter: intialState.counter + 1,
  };
}

const reduxStore = createStore(reduxReducer);

export default reduxStore;
