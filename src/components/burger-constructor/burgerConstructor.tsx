import { Button, ConstructorElement,CurrencyIcon  } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./burgerConstructor.module.css";

export default function burgerConstructor() {

    const items = [
        {
            name: "Краторная булка N-200i",
            price: 1255,
            img: "https://code.s3.yandex.net/react/code/bun-02.png"
        },
        {
            name: "Мясо бессмертных моллюсков Protostomia",
            price: 1337,
            img: "https://code.s3.yandex.net/react/code/meat-02.png"
        },
        {
            name: "Мясо бессмертных моллюсков Protostomia",
            price: 1337,
            img: "https://code.s3.yandex.net/react/code/meat-02.png"
        },
        {
            name: "Мясо бессмертных моллюсков Protostomia",
            price: 1337,
            img: "https://code.s3.yandex.net/react/code/meat-02.png"
        },
        {
            name: "Мясо бессмертных моллюсков Protostomia",
            price: 1337,
            img: "https://code.s3.yandex.net/react/code/meat-02.png"
        },
        {
            name: "Краторная булка N-200i",
            price: 1255,
            img: "https://code.s3.yandex.net/react/code/bun-02.png"
        }
    ];

    return (
        <div className="pt-25">
            <div>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text={items[0].name}
                    price={items[0].price}
                    thumbnail={items[0].img}
                />
                <div className={style.burgerMidle}>
                    {
                        items.map((item, index) => {
                            if (index === 0) { 
                            }
                            else if (index === items.length - 1) {
                            }
                            else {
                                return (
                                    <ConstructorElement
                                        text={item.name}
                                        price={item.price}
                                        thumbnail={item.img}
                                    />
                                );
                            }
                        })
                    }
                </div>
                <ConstructorElement
                type="bottom"
                isLocked={true}
                text={items[items.length - 1].name}
                price={items[items.length - 1].price}
                thumbnail={items[items.length - 1].img}
                />
            </div>
            <div className={`${style.price} pt-10`}>
                <div className="pr-10" style={{display: 'flex', gap: '10px',alignItems: 'center'}}>
                    <p className="text text_type_main-large">
                    {
                        items.reduce((acc, item) => acc + item.price, 0)
                    }
                    </p>
                    <CurrencyIcon type="primary" />
                </div>
                <Button htmlType="button" type="primary" size="large">
                    Оформить заказ
                </Button>
            </div>
        </div>
    );
}