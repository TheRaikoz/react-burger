import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import Style from "./BurgerIngredients.module.css";
import TabItem from "../TabItem/TabItem";
import React from "react";
import { useState, useContext, useReducer, useEffect } from "react";
import PropTypes from "prop-types";
import { burgerPropTypes } from "../../utils/Types";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import Modal from "../Modal/Modal";
import { BurgerContext } from "../../services/BurgerContext";

const ingredientsInitialState = {
  ingredients: [],
  item: null,
};
function ingredientsReducer(state, action) {
  switch (action.type) {
    case "setItem":
      return { ...state, item: action.value };
    case "setIngredients":
      return { ...state, ingredients: action.value };
    default:
      throw new Error("Неверный тип");
  }
}

export function BurgerIngredients() {
  const { ingredients } = React.useContext(BurgerContext);
  const [curentTab, setCurentTab] = React.useState("bun");
  const [visible, setVisible] = React.useState(false);

  const [ingredientsData, ingredientsDispatch] = useReducer(
    ingredientsReducer,
    ingredientsInitialState
  );

  useEffect(() => {
    ingredientsDispatch({
      type: "setIngredients",
      value: ingredients,
    });
  }, [ingredients]);

  function handleOpenModal(id) {
    const item = ingredientsData.ingredients.find((item) => item._id === id);
    ingredientsDispatch({
      type: "setItem",
      value: item,
    });
    setVisible(true);
  }
  function handleCloseModal() {
    setVisible(false);
  }
  function setTab(tab) {
    setCurentTab(tab);
    const element = document.getElementById(tab);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className={`${Style.container} pt-10`}>
      {visible && (
        <Modal onClose={handleCloseModal}>
          <IngredientDetails item={ingredientsData.item} />
        </Modal>
      )}
      <p className="text text_type_main-large">Соберите бургер</p>
      <div className={Style.tabParent}>
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
      <div className={Style.IngredientsContainer}>
        <div className={`${Style.IngredientsTitle} pt-10 pb-6`}>
          <p className="text text_type_main-medium" id={"bun"}>
            Булки
          </p>
        </div>
        <div className={Style.Ingredients}>
          {ingredientsData.ingredients?.length ? (
            ingredientsData.ingredients.map((item) => {
              if (item.type === "bun")
                return (
                  <TabItem
                    key={item._id}
                    img={item.image}
                    cost={item.price}
                    name={item.name}
                    onClick={() => handleOpenModal(item._id)}
                  />
                );
            })
          ) : (
            <p>Товар закончился</p>
          )}
        </div>
        <div className={`${Style.IngredientsTitle} pt-10 pb-6`}>
          <p className="text text_type_main-medium" id={"sauce"}>
            Соусы
          </p>
        </div>
        <div className={Style.Ingredients}>
          {ingredientsData.ingredients?.length ? (
            ingredientsData.ingredients.map((item) => {
              if (item.type === "sauce")
                return (
                  <TabItem
                    key={item._id}
                    img={item.image}
                    cost={item.price}
                    name={item.name}
                    onClick={() => handleOpenModal(item._id)}
                  />
                );
            })
          ) : (
            <p>Товар закончился</p>
          )}
        </div>
        <div className={`${Style.IngredientsTitle} pt-10 pb-6`}>
          <p className="text text_type_main-medium" id={"main"}>
            Начинки
          </p>
        </div>
        <div className={Style.Ingredients}>
          {ingredientsData.ingredients?.length ? (
            ingredientsData.ingredients.map((item) => {
              if (item.type === "main")
                return (
                  <TabItem
                    key={item._id}
                    img={item.image}
                    cost={item.price}
                    name={item.name}
                    onClick={() => handleOpenModal(item._id)}
                  />
                );
            })
          ) : (
            <p>Товар закончился</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default BurgerIngredients;
