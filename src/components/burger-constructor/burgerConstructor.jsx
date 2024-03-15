import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./burgerConstructor.module.css";
import PropTypes from "prop-types";

const burgerConstructorPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number,
  img: PropTypes.string.isRequired,
});

export const burgerConstructor = (props) => {
  const { data } = props;
  return (
    <div className={`${style.container} pt-25`}>
      <div>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={data[0].name}
          price={data[0].price}
          thumbnail={data[0].img}
        />
        <div className={`${style.burgerMidle} pb-4`}>
          {data.map((item, index) => {
            if (index === 0) {
            } else if (index === data.length - 1) {
            } else {
              return (
                <div className="pt-4 mr-5">
                  <DragIcon type="primary" />
                  <ConstructorElement
                    text={item.name}
                    price={item.price}
                    thumbnail={item.img}
                  />
                </div>
              );
            }
          })}
        </div>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={data[data.length - 1].name}
          price={data[data.length - 1].price}
          thumbnail={data[data.length - 1].img}
        />
      </div>
      <div className={`${style.price} pt-10`}>
        <div
          className="pr-10"
          style={{ display: "flex", gap: "10px", alignItems: "center" }}
        >
          <p className="text text_type_main-large">
            {data.reduce((acc, item) => acc + item.price, 0)}
          </p>
          <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};

export default burgerConstructor;

burgerConstructor.propTypes = {
  data: PropTypes.arrayOf(burgerConstructorPropTypes).isRequired,
};
