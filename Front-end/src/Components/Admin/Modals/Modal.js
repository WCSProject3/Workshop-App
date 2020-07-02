import React from "react";

const Modal = ({ closeModal, content, confirmFunction, confirmText }) => {
  return (
    <div className="modal">
      <button onClick={closeModal} className="close">
        X
      </button>
      <p>{content}</p>
      <button onClick={confirmFunction}>{confirmText}</button>
    </div>
  );
};

export default Modal;
