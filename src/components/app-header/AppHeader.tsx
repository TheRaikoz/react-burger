import {Logo} from '@ya.praktikum/react-developer-burger-ui-components'
import {BurgerIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import {ListIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import {ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import './AppHeader.css';

export default function AppHeader() {
    return (
      <div style={{ backgroundColor: '#1C1C21', color: 'white' }} className="p-4">
        <div className='menu'>
          <div className='menu-item'>
            <BurgerIcon type="primary"></BurgerIcon>
            <p className="text text_type_main-small">Конструктор</p>
          </div>
          <div className='menu-item'>
            <ListIcon type="primary"></ListIcon>
            <p className="text text_type_main-small">Лента заказов</p>
          </div>
        </div> 
        <Logo/>
        <div className='menu' style={{ justifyContent: 'flex-end'}}>
          <div className='menu-item'>
            <ProfileIcon type="primary"></ProfileIcon>
            <p className="text text_type_main-small">Личный кабинет</p>
          </div>
        </div>



        
      </div>
    )
  }
  