import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import Style from "./App.module.css";
import React, { useEffect } from "react";
import { BurgerContext } from "../../services/BurgerContext";
import { request } from "../../utils/Request";

function ingredientsReducer(state, action) {
  switch (action.type) {
    case "set":
      return action.value;
    default:
      return state;
  }
}

function App() {
  const [ingredients, setIngredients] = React.useReducer(
    ingredientsReducer,
    []
  );
  const [isLoading, setIsLoading] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    setIsLoading(true);
    request("/api/ingredients", null)
      .then((data) => {
        setIngredients({ type: "set", value: data.data });
      })
      .catch((error) => {
        setError(error);
        setHasError(true);
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  return (
    <div className={Style.App}>
      <AppHeader />
      {isLoading && <p className="text text_type_main-default">Загрузка...</p>}
      {hasError && (
        <p className="text text_type_main-default mr-25 ml-25">
          Ошибка: {error.message}
        </p>
      )}
      {!isLoading && !hasError && (
        <main className={Style.container}>
          <BurgerContext.Provider value={{ ingredients }}>
            <BurgerIngredients />
            <BurgerConstructor />
          </BurgerContext.Provider>
        </main>
      )}
    </div>
  );
}

export default App;
