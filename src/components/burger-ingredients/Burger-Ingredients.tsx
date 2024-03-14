import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import style from './Burger-Ingredients.module.css';
import TabItem from '../tab-item/tab-item';

export default function burgerIngredients()
{
    const setTab = () => {
    };

    return(
        <div className={style.container}>
            <p className="text text_type_main-large">
            Соберите бургер
            </p>
            <div  className={style.tabParent}>
                <Tab active={true} value='bun' onClick={setTab}>Булки</Tab>
                <Tab active={false} value='sauces' onClick={setTab}>Соусы</Tab>
                <Tab active={false} value='filling' onClick={setTab}>Начинки</Tab>
            </div>
            <div className={style.Ingredients}>
                <TabItem></TabItem>
                <TabItem></TabItem>
                <TabItem></TabItem>
            </div>
        </div>
    );
}