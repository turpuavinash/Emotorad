// src/components/Modal.js
import React from 'react';
import '../styles/Modal.css'; // Import CSS for modal styling

const Modal = ({ showModal, closeModal, children }) => {
  if (!showModal) return null; // Do not render if not visible

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Add New Profile</h2>
          <button className="close-btn" onClick={closeModal}>X</button>
        </div>
        <div className="modal-body">
          {children}
        </div>
        <div className="modal-footer">
          <button className="btn" onClick={closeModal}>Back</button>
          <button className="btn done">Done</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
