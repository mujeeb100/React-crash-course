import React from "react";
import Todo from "./Todo";
// import Modal from "./Modal";
// import Backdrop from "./Backdrop";
// update functionality of the STATE

function Maxi() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn React" />
      <Todo text="Master React" />
      <Todo text="Begineer React" />
      {/* <Modal />
      <Backdrop /> */}
    </div>
  );
}

export default Maxi;
