import React from "react";
import Style from "./OrderDetails.module.css";
import done from "../../images/done.svg";

export default class OrderDetails extends React.Component {
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
            <img src={done} alt="done" />
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
