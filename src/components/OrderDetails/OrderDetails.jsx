import React from "react";
import {
  CheckMarkIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Style from "./OrderDetails.module.css";

export default class OrderDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="pt-15 pb-30 pr-15 pl-15">
        <div className={Style.content}>
          <p className={`${Style.orderNumber} text text_type_digits-large`}>
            034536
          </p>
          <p className="text text_type_main-medium pt-4">
            идентификатор заказа
          </p>
          <div className={`${Style.done} pt-15`}>
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
      </div>
    );
  }
}
