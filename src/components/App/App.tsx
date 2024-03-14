import './App.css';
import AppHeader from '../app-header/AppHeader';
import BurgerIngredients from '../burger-ingredients/Burger-Ingredients';

function App() {
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <BurgerIngredients></BurgerIngredients>
    </div>
  );
}

export default App;
