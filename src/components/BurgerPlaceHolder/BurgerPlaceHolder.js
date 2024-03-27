import React from "react";
import burgerUp from "../../images/burgerUp.svg";
import burgerMiddle from "../../images/burgerMiddle.svg";
import burgerBottom from "../../images/burgerBottom.svg";
import Style from "./BurgerPlaceHolder.module.css";

export function BurgerPlaceHolder({ type, text }) {
  let image = null;

  switch (type) {
    case "up":
      image = burgerUp;
      break;
    case "middle":
      image = burgerMiddle;
      break;

    case "buttom":
      image = burgerBottom;
      break;
    default:
      image = null;
  }

  return (
    <div className={Style.container}>
      <img className={Style.image} src={image} alt={type}></img>
      <p className={Style.text}>{text}</p>
    </div>
  );
}

export default BurgerPlaceHolder;
