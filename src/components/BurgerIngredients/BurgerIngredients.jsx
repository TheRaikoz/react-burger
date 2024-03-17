import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./BurgerIngredients.module.css";
import TabItem from "../TabItem/TabItem";
import React from "react";
import PropTypes from "prop-types";
import { burgerPropTypes } from "../../utils/Types";

export class BurgerIngredients extends React.Component {
  constructor(props) {
    super(props);
    this.data = props.data;
    this.curentTab = "bun";
  }

  setCurentTab = (tab) => {
    this.state.curentTab = tab;
  };

  setTab = (tab) => {
    this.setCurentTab(tab);
    const element = document.getElementById(tab);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  render() {
    return (
      <div className={style.container}>
        <p className="text text_type_main-large">Соберите бургер</p>

        <div className={style.tabParent}>
          <Tab
            active={this.curentTab === "bun"}
            value="bun"
            onClick={this.setTab}
          >
            Булки
          </Tab>
          <Tab
            active={this.curentTab === "sauce"}
            value="sauce"
            onClick={this.setTab}
          >
            Соусы
          </Tab>
          <Tab
            active={this.curentTab === "main"}
            value="main"
            onClick={this.setTab}
          >
            Начинки
          </Tab>
        </div>
        <div className={style.IngredientsContainer}>
          <div className={`${style.IngredientsTitle} pt-10 pb-6`}>
            <p className="text text_type_main-medium" id={"bun"}>
              Булки
            </p>
          </div>
          <div className={style.Ingredients}>
            {this.data.map((item) => {
              if (item.type === "bun")
                return (
                  <TabItem
                    key={item._id}
                    img={item.image}
                    cost={item.price}
                    name={item.name}
                  />
                );
            })}
          </div>
          <div className={`${style.IngredientsTitle} pt-10 pb-6`}>
            <p className="text text_type_main-medium" id={"sauce"}>
              Соусы
            </p>
          </div>
          <div className={style.Ingredients}>
            {this.data.map((item) => {
              if (item.type === "sauce")
                return (
                  <TabItem
                    key={item._id}
                    img={item.image}
                    cost={item.price}
                    name={item.name}
                  />
                );
            })}
          </div>
          <div className={`${style.IngredientsTitle} pt-10 pb-6`}>
            <p className="text text_type_main-medium" id={"main"}>
              Начинки
            </p>
          </div>
          <div className={style.Ingredients}>
            {this.data.map((item) => {
              if (item.type === "main")
                return (
                  <TabItem
                    key={item._id}
                    img={item.image}
                    cost={item.price}
                    name={item.name}
                  />
                );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default BurgerIngredients;

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(burgerPropTypes).isRequired,
};
