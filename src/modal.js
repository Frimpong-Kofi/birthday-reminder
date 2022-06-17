import React, { useEffect } from "react";

const Modal = ({ modalContent, CloseModal, alert, people }) => {
  useEffect(() => {
    setTimeout(() => {
      CloseModal();
    }, 3000);
  }, [people]);
  return (
    // <p className="container text-center alert alert-info">{modalContent}</p>
    <p className={`container text-center alert alert-${alert}`}>{modalContent}</p>
  );
};

export default Modal;
