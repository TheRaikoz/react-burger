import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./TabItem.module.css";
import React from "react";

export default class TabItem extends React.Component {
  constructor(props) {
    super(props);
    this.img = props.img;
    this.cost = props.cost;
    this.name = props.name;
  }

  render() {
    return (
      <div className={style.container} onClick={this.props.onClick}>
        <div className={style.counter}>
          <Counter count={1} size="default" extraClass="m-1" />
        </div>
        <img
          src={this.img}
          className={`${style.image} pl-4 pr-4`}
          alt={this.name}
        ></img>
        <div className={`${style.cost} p-1`}>
          <p className="text text_type_main-small">{this.cost}</p>
          <CurrencyIcon type="primary" />
        </div>
        <p className="text text_type_main-default">{this.name}</p>
      </div>
    );
  }
}
