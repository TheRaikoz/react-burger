import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import Style from "./App.module.css";
import React, { useEffect } from "react";
import { BurgerContext } from "../../services/BurgerContext";

const DOMAIN_URL = "https://norma.nomoreparties.space";

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
    fetch(`${DOMAIN_URL}/api/ingredients`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(`Ошибка ${response.status}`);
      })
      .then((data) => {
        setIngredients({ type: "set", value: data.data });
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setHasError(true);
        setIsLoading(false);
        console.log(error);
      });
  }
  return (
    <div className={Style.App}>
      <AppHeader />
      {isLoading && <p className="text text_type_main-default">Загрузка...</p>}
      {hasError && <p className="text text_type_main-default">Ошибка: {error}</p>}
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
