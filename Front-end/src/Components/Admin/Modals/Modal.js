import React from "react";
import './Modal.scss';

const Modal = ({ closeModal, content, confirmFunction, confirmText }) => {
  return (
    <div className="modal-bg">
      <div className="modal">
        <button className="close-modal" onClick={closeModal} >
        X
        </button>
        <p>{content}</p>
        <button className="confirm-modal" onClick={confirmFunction}>{confirmText}</button>
      </div>
    </div>
    
  );
};

export default Modal;
