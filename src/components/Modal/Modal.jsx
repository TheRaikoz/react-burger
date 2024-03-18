import React from "react";
import ReactDOM from "react-dom";
import style from "./Modal.module.css";
import ModalOverlay from "../ModalOverlay/ModalOverlay";

const modalRoot = document.getElementById("constructor-Root");

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={style.container}>
        {this.props.children}
        <ModalOverlay onClose={this.props.onClose} />
      </div>
    );
  }
}
