function Modal(props) {
  function cancelHandler() {
    props.onCancel();
  }
  function confirmHandler() {
    props.onConfirm();
  }

  return (
    <div className="modal">
      <p>Are you sure ??</p>
      <button onClick={cancelHandler} className="btn btn-alt">
        Cancel
      </button>
      <button onClick={confirmHandler} className="btn">
        Confirms
      </button>
    </div>
  );
}
export default Modal;
