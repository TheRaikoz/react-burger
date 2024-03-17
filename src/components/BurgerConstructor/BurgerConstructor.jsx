import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./BurgerConstructor.module.css";
import PropTypes from "prop-types";
import { burgerPropTypes } from "../../utils/Types";
import React from "react";

export class BurgerConstructor extends React.Component {
  constructor(props) {
    super(props);
    this.data = props.data;
  }

  render() {
    return (
      <div className={`${style.container} pt-25`}>
        <div>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={this.data[0].name + " (Верх)"}
            price={this.data[0].price}
            thumbnail={this.data[0].image}
          />
          <div className={`${style.burgerMidle} pb-4`}>
            {this.data.map((item, index) => {
              if (index === 0) {
              } else if (index === this.data.length - 1) {
              } else {
                return (
                  <div className="pt-4 mr-5" key={index}>
                    <DragIcon type="primary" />
                    <ConstructorElement
                      text={item.name}
                      price={item.price}
                      thumbnail={item.image}
                    />
                  </div>
                );
              }
            })}
          </div>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={this.data[this.data.length - 1].name + " (Низ)"}
            price={this.data[this.data.length - 1].price}
            thumbnail={this.data[this.data.length - 1].image}
          />
        </div>
        <div className={`${style.price} pt-10 pr-10`}>
          <div className={style.priceContainer}>
            <p className="text text_type_main-large">
              {this.data.reduce((acc, item) => acc + item.price, 0)}
            </p>
            <CurrencyIcon type="primary" />
          </div>
          <Button htmlType="button" type="primary" size="large">
            Оформить заказ
          </Button>
        </div>
      </div>
    );
  }
}

export default BurgerConstructor;

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(burgerPropTypes).isRequired,
};
