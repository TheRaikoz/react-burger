import AppHeader from "../AppHeader/AppHeader";
import { data } from "../../utils/data";
import { items } from "../../utils/constructorData";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import style from "./App.module.css";

function App() {
  return (
    <div className={style.App}>
      <AppHeader />
      <main className={style.container}>
        <BurgerIngredients data={data} />
        <BurgerConstructor data={items} />
      </main>
    </div>
  );
}

export default App;
