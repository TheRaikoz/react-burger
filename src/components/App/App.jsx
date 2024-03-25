import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import Style from "./App.module.css";
import React, { useEffect } from "react";
import { BurgerConstructorContext } from "../../services/BurgerCondex";

const DOMAIN_URL = "https://norma.nomoreparties.space";

function App() {
  const [data, setData] = React.useState([]);
  const [items, setItems] = React.useState([]);
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
        setData(data.data);
        setIsLoading(false);
        setItems([data.data[0]]);
      })
      .catch((error) => {
        setError(error);
        setHasError(true);
        setIsLoading(false);
      });
  }
  return (
    <div className={Style.App}>
      <AppHeader />
      <main className={Style.container}>
        {CheckError({
          component: BurgerIngredients,
          burgerData: data,
          isLoading: isLoading,
          hasError: hasError,
          error: error,
        })}
        <BurgerConstructorContext.Provider value={[items, setItems]}>
          {CheckError({
            component: BurgerConstructor,
            burgerData: items,
            isLoading: isLoading,
            hasError: hasError,
            error: error,
          })}
        </BurgerConstructorContext.Provider>
      </main>
    </div>
  );
}

function CheckError({
  component: Component,
  burgerData,
  isLoading,
  hasError,
  error,
}) {
  return (
    <>
      {isLoading && <p>Загрузка...</p>}
      {hasError && <p>Произошла ошибка {error}</p>}
      {!isLoading &&
        !hasError &&
        burgerData !== undefined &&
        !!burgerData.length && <Component data={burgerData} />}
    </>
  );
}

export default App;
