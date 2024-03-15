import { Button,ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";

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

    return(
        <div className="pt-25">
            <div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {
                        items.map((item,index) => {    
                                if(index === 0){
                                    return (
                                    <ConstructorElement
                                        type="top"
                                        isLocked={true}
                                        text={item.name}
                                        price={item.price}
                                        thumbnail={item.img}
                                        />
                                        );
                                    
                                }
                                else if(index === items.length - 1){
                                    return (
                                        <ConstructorElement
                                        type="bottom"
                                        isLocked={true}
                                        text={item.name}
                                        price={item.price}
                                        thumbnail={item.img}
                                        />
                                    );
                                }
                                else{
                                    return(
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
            </div>
            <div className="pt-10">
                <div>

                </div>
                <Button htmlType="button" type="primary" size="large">
                Оформить заказ
                </Button>
            </div>
        </div>
    );
}