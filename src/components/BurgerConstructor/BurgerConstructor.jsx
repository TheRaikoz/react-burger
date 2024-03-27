import {
  Button,
  ConstructorElement,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Style from "./BurgerConstructor.module.css";
import React from "react";
import BurgerMiddle from "../BurgerMiddle/BurgerMiddle";
import OrderDetails from "../OrderDetails/OrderDetails";
import Modal from "../Modal/Modal";
import { BurgerContext } from "../../services/BurgerContext";
import { useState, useContext, useReducer, useEffect } from "react";
import { BurgerPlaceHolder } from "../BurgerPlaceHolder/BurgerPlaceHolder";

const DOMAIN_URL = "https://norma.nomoreparties.space";

const constructorInitialState = {
  bun: null,
  ingredients: [],
  total: 0,
};

function constructorReducer(state, action) {
  switch (action.type) {
    case "setBun":
      return { ...state, bun: action.value };
    case "setIngredients":
      return { ...state, ingredients: action.value };
    case "setTotal":
      return { ...state, total: action.value };
    case "setOrderNumber":
      return { ...state, orderNumber: action.value };
    default:
      throw new Error(`Wrong type of action: ${action.type}`);
  }
}

export function BurgerConstructor() {
  const { ingredients } = useContext(BurgerContext);
  const [visible, setVisible] = useState(false);

  const [constructorData, constructorDispatch] = useReducer(
    constructorReducer,
    constructorInitialState
  );

  useEffect(() => {
    constructorDispatch({
      type: "setBun",
      value: ingredients?.find((ingredient) => ingredient.type === "bun"), //Находим булку и используем ее
    });
    constructorDispatch({
      type: "setIngredients",
      value: ingredients?.filter((ingredient) => ingredient.type !== "bun"), //Берем данные без булок
    });
  }, [ingredients]);

  useEffect(() => {
    constructorDispatch({
      type: "setTotal",
      value:
        ingredients?.reduce((acc, item) => acc + item.price, 0) +
        constructorData.bun?.price * 2, //Общая стоимость индигриентов + две булки
    });
  }, [constructorData.ingredients]);

  function handleOpenModal() {
    fetch(`${DOMAIN_URL}/api/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ingredients: constructorData.ingredients.map(
          (ingredient) => ingredient._id
        ),
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        constructorDispatch({
          type: "setOrderNumber",
          value: response.order.number,
        });
        setVisible(true);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  function handleCloseModal() {
    setVisible(false);
  }
  return (
    <div className={`${Style.container} pt-15`}>
      {visible && (
        <Modal onClose={handleCloseModal}>
          <OrderDetails number={constructorData.orderNumber} />
        </Modal>
      )}
      <div>
        <div className={Style.burgerTopBotom}>
          {constructorData.bun ? (
            <ConstructorElement
              type="top"
              isLocked={true}
              text={constructorData.bun.name + " (Верх)"}
              price={constructorData.bun.price}
              thumbnail={constructorData.bun.image}
            />
          ) : (
            <BurgerPlaceHolder type="up" text="Выбирите булку" />
          )}
        </div>
        <div className={Style.burgerMiddle}>
          {constructorData.ingredients?.length ? (
            constructorData.ingredients.map((item, index) => (
              <BurgerMiddle item={item} key={index} />
            ))
          ) : (
            <div className="pt-4 pl-3">
              <BurgerPlaceHolder type="middle" text="Выбирите начинку" />
            </div>
          )}
        </div>
        <div className={`${Style.burgerTopBotom} pt-4`}>
          {constructorData.bun ? (
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text={constructorData.bun.name + " (низ)"}
              price={constructorData.bun.price}
              thumbnail={constructorData.bun.image}
            />
          ) : (
            <BurgerPlaceHolder type="buttom" text="Выбирите булку" />
          )}
        </div>
      </div>
      <div className={`${Style.price} pt-10 pr-10`}>
        <div className={Style.priceContainer}>
          <p className="text text_type_main-large">
            {constructorData.total ? constructorData.total : 0}
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
