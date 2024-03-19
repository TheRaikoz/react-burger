import React from "react";
import ReactDOM from "react-dom";
import style from "./Modal.module.css";
import ModalOverlay from "../ModalOverlay/ModalOverlay";

const modalRoot = document.getElementById("root");

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.key === "Escape") {
      this.props.onClose();
    }
  };
  render() {
    return ReactDOM.createPortal(
      <div>
        {this.props.children}
        <ModalOverlay onClose={this.props.onClose} />
        <input onKeyDown={() => console.log("key was pressed")} type="text" />
      </div>,
      modalRoot
    );
  }
}
