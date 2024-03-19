import React from "react";
import Modal from "../Modal/Modal";
import style from "./IngredientDetails.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { burgerPropTypes } from "../../utils/Types";

export default class IngredientDetails extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Modal onClose={this.props.onClose}>
        <div className={style.modal}>
          <div className={`${style.close} pt-7 pr-10`}>
            <CloseIcon type="primary" onClick={this.props.onClose} />
          </div>
          <div className={style.content}>
            <p className="text text_type_main-large pt-10">
              Детали ингредиента
            </p>
            <img src={this.props.item.image_large} alt={this.props.item.name} />
            <p className="text text_type_main-medium pt-4">
              {this.props.item.name}
            </p>
            <div className={style.info}>
              <div className={style.infoItem}>
                <p className="text text_type_main-medium text_color_inactive">
                  Калории, ккал
                </p>
                <p className="text text_type_digits-medium text_color_inactive">
                  {this.props.item.calories}
                </p>
              </div>
              <div className={style.infoItem}>
                <p className="text text_type_main-medium text_color_inactive">
                  Белки, г
                </p>
                <p className="text text_type_digits-medium text_color_inactive">
                  {this.props.item.proteins}
                </p>
              </div>
              <div className={style.infoItem}>
                <p className="text text_type_main-medium text_color_inactive">
                  Жиры, г
                </p>
                <p className="text text_type_digits-medium text_color_inactive">
                  {this.props.item.fat}
                </p>
              </div>
              <div className={style.infoItem}>
                <p className="text text_type_main-medium text_color_inactive">
                  Углеводы, г
                </p>
                <p className="text text_type_digits-medium text_color_inactive">
                  {this.props.item.carbohydrates}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

IngredientDetails.propTypes = {
  item: PropTypes.object.isRequired,
};
