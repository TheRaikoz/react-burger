import {Logo} from '@ya.praktikum/react-developer-burger-ui-components'
import {BurgerIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import {ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import {ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import AppHeaderStyles from './AppHeader.module.css';

export default function appHeader() {
    return (
      <div className={AppHeaderStyles.header}>
        <div className={AppHeaderStyles.menu}>
          <div className={AppHeaderStyles.leftButtons}>
            <div className={AppHeaderStyles.menuItem}>
              <BurgerIcon type="primary"></BurgerIcon>
              <p className={"text text_type_main-small"}>Конструктор</p>
            </div>
            <div className={AppHeaderStyles.menuItem}>
              <ListIcon type="secondary"></ListIcon>
              <p className={"text_color_inactive"}>Лента заказов</p>
            </div>
          </div>
          <div className={AppHeaderStyles.logo}>
          <Logo/>
          </div>
          <div className={AppHeaderStyles.rightButtons}>
            <div className={AppHeaderStyles.menuItem}>
              <ProfileIcon type="secondary"></ProfileIcon>
              <p className={"text_color_inactive"}>Личный кабинет</p>
            </div>
          </div>
        </div> 
      </div>
    )
  }
  