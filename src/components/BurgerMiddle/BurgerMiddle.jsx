import React from "react";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./BurgerMiddle.module.css";
import PropTypes from "prop-types";

export default class BurgerMiddle extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={`${style.container} pt-4 pr-3`}>
        <div className={style.burgerDrag}>
          <DragIcon type="primary" />
        </div>
        <ConstructorElement
          text={this.props.item.name}
          price={this.props.item.price}
          thumbnail={this.props.item.image}
        />
      </div>
    );
  }
}
BurgerMiddle.propTypes = {
  item: PropTypes.object.isRequired,
};
