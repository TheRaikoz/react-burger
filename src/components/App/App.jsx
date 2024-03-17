import AppHeader from "../AppHeader/AppHeader";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import style from "./App.module.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      items: [],
      isLoading: false,
      hasError: false,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    this.setState({ isLoading: true });
    fetch("https://norma.nomoreparties.space/api/ingredients")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          data: data.data,
          isLoading: false,
          items: [
            data.data[0],
            data.data[1],
            data.data[6],
            data.data[6],
            data.data[6],
            data.data[7],
            data.data[8],
            data.data[0],
          ],
        })
      )
      .catch((error) =>
        this.setState({ error: error, hasError: true, isLoading: false })
      );
  };

  render() {
    const { data, items, isLoading, hasError, error } = this.state;
    return (
      <div className={style.App}>
        <AppHeader />
        <main className={style.container}>
          {CheckError({
            component: BurgerIngredients,
            burgerData: data,
            isLoading: isLoading,
            hasError: hasError,
            error: error,
          })}
          {CheckError({
            component: BurgerConstructor,
            burgerData: items,
            isLoading: isLoading,
            hasError: hasError,
            error: error,
          })}
        </main>
      </div>
    );
  }
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
