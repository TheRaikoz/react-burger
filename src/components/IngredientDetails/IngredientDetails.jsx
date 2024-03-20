import React from "react";
import Style from "./IngredientDetails.module.css";
import PropTypes from "prop-types";

export default class IngredientDetails extends React.Component {
  render() {
    return (
      <div className="pt-10 pb-15 pr-10 pl-10">
        <div className={Style.content}>
          <p className="text text_type_main-large">Детали ингредиента</p>
          <img src={this.props.item.image_large} alt={this.props.item.name} />
          <p className="text text_type_main-medium pt-4">
            {this.props.item.name}
          </p>
          <div className={`${Style.info} pt-8`}>
            <div className={`${Style.infoItem} pr-5`}>
              <p className="text text_type_main-default text_color_inactive">
                Калории,ккал
              </p>
              <p className="text text_type_digits-medium text_color_inactive">
                {this.props.item.calories}
              </p>
            </div>
            <div className={`${Style.infoItem} pr-5`}>
              <p className="text text_type_main-default text_color_inactive">
                Белки, г
              </p>
              <p className="text text_type_digits-medium text_color_inactive">
                {this.props.item.proteins}
              </p>
            </div>
            <div className={`${Style.infoItem} pr-5`}>
              <p className="text text_type_main-default text_color_inactive">
                Жиры, г
              </p>
              <p className="text text_type_digits-medium text_color_inactive">
                {this.props.item.fat}
              </p>
            </div>
            <div className={`${Style.infoItem}`}>
              <p className="text text_type_main-default text_color_inactive">
                Углеводы, г
              </p>
              <p className="text text_type_digits-medium text_color_inactive">
                {this.props.item.carbohydrates}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

IngredientDetails.propTypes = {
  item: PropTypes.object.isRequired,
};
