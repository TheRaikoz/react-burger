import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./Burger-Ingredients.module.css";
import TabItem from "../tab-item/tab-item";
import React from "react";
import PropTypes from "prop-types";
import { burgerPropTypes } from "../../utils/Types";

export const BurgerIngredients = (props) => {
  const { data } = props;
  const [curentTab, setCurentTab] = React.useState("bun");

  const setTab = (tab) => {
    setCurentTab(tab);
    const element = document.getElementById(tab);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={style.container}>
      <p className="text text_type_main-large">Соберите бургер</p>

      <div className={style.tabParent}>
        <Tab active={curentTab === "bun"} value="bun" onClick={setTab}>
          Булки
        </Tab>
        <Tab active={curentTab === "sauce"} value="sauce" onClick={setTab}>
          Соусы
        </Tab>
        <Tab active={curentTab === "main"} value="main" onClick={setTab}>
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
          {data.map((item) => {
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
          {data.map((item) => {
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
          {data.map((item) => {
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
};

export default BurgerIngredients;

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(burgerPropTypes).isRequired,
};
