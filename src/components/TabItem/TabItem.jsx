import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Style from "./TabItem.module.css";

export default function TabItem({ img, cost, name, onClick }) {
  return (
    <div className={Style.container} onClick={onClick}>
      <div className={Style.counter}>
        <Counter count={1} size="default" extraClass="m-1" />
      </div>
      <img src={img} className={`${Style.image} pl-4 pr-4`} alt={name}></img>
      <div className={`${Style.cost} p-1`}>
        <p className="text text_type_main-small">{cost}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className="text text_type_main-default">{name}</p>
    </div>
  );
}
