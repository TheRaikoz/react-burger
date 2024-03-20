import React from "react";
import Style from "./ModalOverlay.module.css";

export default class ModalOverlay extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div onClick={this.props.onClose} className={Style.container}></div>;
  }
}
