import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  CloseIcon,
  CheckMarkIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Style from "./BurgerConstructor.module.css";
import PropTypes from "prop-types";
import { burgerPropTypes } from "../../utils/Types";
import React from "react";
import BurgerMiddle from "../BurgerMiddle/BurgerMiddle";
import OrderDetails from "../OrderDetails/OrderDetails";
import Modal from "../Modal/Modal";
import { BurgerConstructorContext } from "../../services/BurgerCondex";

export function BurgerConstructor() {
  const [items] = React.useContext(BurgerConstructorContext);
  const [visible, setVisible] = React.useState(false);

  function handleOpenModal() {
    setVisible(true);
  }

  function handleCloseModal() {
    setVisible(false);
  }
  console.log(items);
  return (
    <div className={`${Style.container} pt-15`}>
      {visible && (
        <Modal onClose={handleCloseModal}>
          <OrderDetails />
        </Modal>
      )}
      <div>
        <div className={Style.burgerTopBotom}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={items[0].name + " (Верх)"}
            price={items[0].price}
            thumbnail={items[0].image}
          />
        </div>
        <div className={Style.burgerMiddle}>
          {items.map((item, index) => {
            if (index === 0) {
            } else if (index === items.length - 1) {
            } else {
              return <BurgerMiddle item={item} key={index} />;
            }
          })}
        </div>
        <div className={`${Style.burgerTopBotom} pt-4`}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={items[items.length - 1].name + " (Низ)"}
            price={items[items.length - 1].price}
            thumbnail={items[items.length - 1].image}
          />
        </div>
      </div>
      <div className={`${Style.price} pt-10 pr-10`}>
        <div className={Style.priceContainer}>
          <p className="text text_type_main-large">
            {React.useMemo(() =>
              items.reduce((acc, item) => acc + item.price, 0)
            )}
          </p>
          <CurrencyIcon type="primary" />
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={handleOpenModal}
        >
          Оформить заказ
        </Button>
      </div>
    </div>
  );
}

export default BurgerConstructor;

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(burgerPropTypes).isRequired,
};
