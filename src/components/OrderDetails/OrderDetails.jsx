import Style from "./OrderDetails.module.css";
import done from "../../images/done.svg";
import PropTypes from "prop-types";

export default function OrderDetails({ number }) {
  return (
    <div className="pt-15 pb-30 pr-15 pl-15">
      <div className={Style.content}>
        <p className={`${Style.orderNumber} text text_type_digits-large`}>
          {number}
        </p>
        <p className="text text_type_main-medium pt-4">идентификатор заказа</p>
        <div className={`${Style.done} pt-15`}>
          <img src={done} alt="done" />
        </div>
        <p className="text text_type_main-medium pt-25">
          Ваш заказ начали готовить
        </p>
        <p className="text text_type_main-medium text_color_inactive pt-2">
          Дождитесь готовности на орбитальной станции
        </p>
      </div>
    </div>
  );
}

OrderDetails.propTypes = {
  number: PropTypes.number.isRequired,
};
