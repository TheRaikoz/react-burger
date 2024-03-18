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
import Modal from "../Modal/Modal";

export class BurgerIngredients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      curentTab: "bun",
      setTab: this.setTab,
      visible: false,
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
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
    const modal = (
      <Modal onClose={this.handleCloseModal}>
        <div className={style.modal}>
          <div className={`${style.close} pt-7 pr-10`}>
            <CloseIcon type="primary" onClick={this.handleCloseModal} />
          </div>
          <p className="text text_type_main-large pt-10">Детали ингредиента</p>
          <img src="https://code.s3.yandex.net/react/code/bun-01.png" />
          <p className="text text_type_main-medium pt-4">
            Биокотлета из марсианской Магнолии
          </p>
          <div className={`${style.info} pt-8`}>
            <p className="text text_type_main-small text_color_inactive pr-5">
              Калории,ккал
            </p>
            <p className="text text_type_main-small text_color_inactive pr-5">
              Белки, г
            </p>
            <p className="text text_type_main-small text_color_inactive pr-5">
              Жиры, г
            </p>
            <p className="text text_type_main-small text_color_inactive pr-5">
              Углеводы, г
            </p>
          </div>
        </div>
      </Modal>
    );

    const { data, setTab, curentTab } = this.state;
    return (
      <div className={`${style.container} pt-10`}>
        {this.state.visible && modal}
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
                    onClick={this.handleOpenModal}
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
                    onClick={this.handleOpenModal}
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
                    onClick={this.handleOpenModal}
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
