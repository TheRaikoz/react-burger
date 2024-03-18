import React from "react";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./BurgerMiddle.module.css";

export default class BurgerMiddle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: props.item,
    };
  }
  render() {
    const { item } = this.state;
    return (
      <div className={`${style.container} pt-4`}>
        <div className={style.burgerDrag}>
          <DragIcon type="primary" />
        </div>
        <ConstructorElement
          text={item.name}
          price={item.price}
          thumbnail={item.image_mobile}
        />
      </div>
    );
  }
}
