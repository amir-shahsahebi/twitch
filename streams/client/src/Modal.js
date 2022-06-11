import React from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
const Modal = (props) => {
  const navigate = useNavigate();
  return ReactDOM.createPortal(
    <div
      onClick={() => navigate("/")}
      className="ui dimmer modals visible active"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">Delete Stream</div>
        <div className="content">
          Are you sure you want to delete this stream?
        </div>
        <div className="actions">
          <button className="ui primary button">Delete</button>
          <button className="ui button">Cancel</button>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
