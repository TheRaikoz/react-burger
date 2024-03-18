import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  CloseIcon,
  CheckMarkIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./BurgerConstructor.module.css";
import PropTypes from "prop-types";
import { burgerPropTypes } from "../../utils/Types";
import React from "react";
import Modal from "../Modal/Modal";
import BurgerMiddle from "../BurgerMiddle/BurgerMiddle";

export class BurgerConstructor extends React.Component {
  constructor(props) {
    super(props);
    this.data = props.data;
    this.state = {
      visible: false,
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ visible: true });
  }

  handleCloseModal() {
    this.setState({ visible: false });
  }

  render() {
    const modal = (
      <Modal onClose={this.handleCloseModal}>
        <div className={style.modal}>
          <div className={`${style.close} pt-7 pr-10`}>
            <CloseIcon type="primary" onClick={this.handleCloseModal} />
          </div>
          <p
            className={`${style.orderNumber} text text_type_digits-large pt-10`}
          >
            034536
          </p>
          <p className="text text_type_main-medium pt-4">
            идентификатор заказа
          </p>
          <div className={`${style.done} pt-15`}>
            <CheckMarkIcon type="primary" />
          </div>
          <div className="pt-30">
            <p className="text text_type_main-medium">
              Ваш заказ начали готовить
            </p>
            <p className="text text_type_main-medium text_color_inactive pt-2">
              Дождитесь готовности на орбитальной станции
            </p>
          </div>
        </div>
      </Modal>
    );

    return (
      <div id="constructor-Root" className={`${style.container} pt-15`}>
        {this.state.visible && modal}
        <div>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={this.data[0].name + " (Верх)"}
            price={this.data[0].price}
            thumbnail={this.data[0].image_mobile}
          />
          <div className={style.burgerMiddle}>
            {this.data.map((item, index) => {
              if (index === 0) {
              } else if (index === this.data.length - 1) {
              } else {
                return <BurgerMiddle item={item} key={index} />;
              }
            })}
          </div>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={this.data[this.data.length - 1].name + " (Низ)"}
            price={this.data[this.data.length - 1].price}
            thumbnail={this.data[this.data.length - 1].image_mobile}
          />
        </div>
        <div className={`${style.price} pt-10 pr-10`}>
          <div className={style.priceContainer}>
            <p className="text text_type_main-large">
              {this.data.reduce((acc, item) => acc + item.price, 0)}
            </p>
            <CurrencyIcon type="primary" />
          </div>
          <Button
            htmlType="button"
            type="primary"
            size="large"
            onClick={this.handleOpenModal}
          >
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
