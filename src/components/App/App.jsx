import "./App.css";
import AppHeader from "../app-header/AppHeader";
import { data } from "../../utils/data";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burgerConstructor";

function App() {
  const items = [
    {
      id: "60666c42cc7b410027a1a9b1",
      name: "Краторная булка N-200i",
      price: 1255,
      img: "https://code.s3.yandex.net/react/code/bun-02.png",
    },
    {
      id: "60666c42cc7b410027a1a9b4",
      name: "Мясо бессмертных моллюсков Protostomia",
      price: 1337,
      img: "https://code.s3.yandex.net/react/code/meat-02.png",
    },
    {
      id: "60666c42cc7b410027a1a9b4",
      name: "Мясо бессмертных моллюсков Protostomia",
      price: 1337,
      img: "https://code.s3.yandex.net/react/code/meat-02.png",
    },
    {
      id: "60666c42cc7b410027a1a9b4",
      name: "Мясо бессмертных моллюсков Protostomia",
      price: 1337,
      img: "https://code.s3.yandex.net/react/code/meat-02.png",
    },
    {
      id: "60666c42cc7b410027a1a9b4",
      name: "Мясо бессмертных моллюсков Protostomia",
      price: 1337,
      img: "https://code.s3.yandex.net/react/code/meat-02.png",
    },
    {
      id: "60666c42cc7b410027a1a9b4",
      name: "Мясо бессмертных моллюсков Protostomia",
      price: 1337,
      img: "https://code.s3.yandex.net/react/code/meat-02.png",
    },
    {
      id: "60666c42cc7b410027a1a9b4",
      name: "Мясо бессмертных моллюсков Protostomia",
      price: 1337,
      img: "https://code.s3.yandex.net/react/code/meat-02.png",
    },
    {
      id: "60666c42cc7b410027a1a9b1",
      name: "Краторная булка N-200i",
      price: 1255,
      img: "https://code.s3.yandex.net/react/code/bun-02.png",
    },
  ];

  return (
    <div className="App">
      <AppHeader></AppHeader>
      <div style={{ display: "flex", justifyContent: "center", gap: "40px" }}>
        <BurgerIngredients data={data}></BurgerIngredients>
        <BurgerConstructor data={items}></BurgerConstructor>
      </div>
    </div>
  );
}

export default App;
