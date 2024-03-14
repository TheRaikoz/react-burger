import {Counter,CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';

export default function tabItem()
{
    return(
        <div>
            <Counter count={200} size="default" extraClass="m-1" />
            <img src='https://code.s3.yandex.net/react/code/bun-02.png'></img>
            <div>
            <p className="text text_type_main-small">20</p>
            <CurrencyIcon type="primary" />
            </div>
            <p className="text text_type_main-default">Какаято булка</p>
        </div>
    );
}