import AppHeader from "../AppHeader/AppHeader";
import { data } from "../../utils/data";
import { items } from "../../utils/constructorData";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import style from "./App.module.css";

function App() {
  return (
    <div className={style.App}>
      <header>
        <AppHeader />
      </header>
      <main className={style.container}>
        <BurgerIngredients data={data}></BurgerIngredients>
        <BurgerConstructor data={items}></BurgerConstructor>
      </main>
    </div>
  );
}

export default App;
