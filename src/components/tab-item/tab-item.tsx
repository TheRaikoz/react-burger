import {Counter,CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import style from './tab-item.module.css';

interface TabItemProps {
    img: string;
    cost: number;
    name: string;
}

export default function tabItem({ img, cost, name }: TabItemProps)
{
    return(
        <div className={style.container}>
            <div className={style.counter}>
                <Counter count={1} size="default" extraClass="m-1" />
            </div>
            <img src={img} className={`${style.image} pl-4 pr-4`} alt="item-image"></img>
            <div className={`${style.cost} p-1`}>
                <p className="text text_type_main-small">{cost}</p>
                <CurrencyIcon type="primary" />
            </div>
            <p className="text text_type_main-default">{name}</p>
        </div>
    );
}