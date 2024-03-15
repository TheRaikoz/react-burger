import AppHeader from "../app-header/AppHeader";
import { data } from "../../utils/data";
import { items } from "../../utils/constructorData";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burgerConstructor";
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
