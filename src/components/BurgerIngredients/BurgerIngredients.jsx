import {
  Tab,
  CloseIcon,
  CheckMarkIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./BurgerIngredients.module.css";
import TabItem from "../TabItem/TabItem";
import React from "react";
import PropTypes from "prop-types";
import { burgerPropTypes } from "../../utils/Types";
import IngredientDetails from "../IngredientDetails/IngredientDetails";

export class BurgerIngredients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      curentTab: "bun",
      setTab: this.setTab,
      visible: false,
      item: null,
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal(id) {
    const item = this.state.data.find((item) => item._id === id);
    this.setState({ item: item });
    this.setState({ visible: true });
  }
  handleCloseModal() {
    this.setState({ visible: false });
  }

  setCurentTab = (tab) => {
    this.setState({ curentTab: tab });
    console.log(this.curentTab);
  };

  setTab = (tab) => {
    this.setCurentTab(tab);
    const element = document.getElementById(tab);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };
  render() {
    const { data, setTab, curentTab } = this.state;
    return (
      <div className={`${style.container} pt-10`}>
        {this.state.visible && (
          <IngredientDetails
            onClose={this.handleCloseModal}
            item={this.state.item}
          />
        )}
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
                    onClick={() => this.handleOpenModal(item._id)}
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
                    onClick={() => this.handleOpenModal(item._id)}
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
                    onClick={() => this.handleOpenModal(item._id)}
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
