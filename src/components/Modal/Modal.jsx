import React from "react";
import ReactDOM from "react-dom";
import style from "./Modal.module.css";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const modalRoot = document.getElementById("modals");

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
        <div className={style.modal}>
          <div className={`${style.close} pt-10 pr-10`}>
            <CloseIcon type="primary" onClick={this.props.onClose} />
          </div>
          {this.props.children}
        </div>
        <ModalOverlay onClose={this.props.onClose} />
      </div>,
      modalRoot
    );
  }
}
