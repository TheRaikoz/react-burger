import React from "react";
import style from "./ModalOverlay.module.css";
import Modal from "../Modal/Modal";

export default class ModalOverlay extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div onClick={this.props.onClose} className={style.container}></div>;
  }
}
