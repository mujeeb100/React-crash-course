import React, { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  const [modalIsopen, setModalOpen] = useState(false);

  function deleteHandler() {
    setModalOpen(true);

    // console.log("Clicked");
  }
  function closeModalHandler() {
    setModalOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text} Title</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsopen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {/* <Modal /> */}
      {modalIsopen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default Todo;
