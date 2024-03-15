import './App.css';
import AppHeader from '../app-header/AppHeader';
import BurgerIngredients from '../burger-ingredients/Burger-Ingredients';
import BurgerConstructor from '../burger-constructor/burgerConstructor';  

function App() {
  return (
    <div className="App">
      <AppHeader></AppHeader>
      <div style={{display: 'flex',justifyContent: 'center',gap: '40px'}}>
      <BurgerIngredients></BurgerIngredients>
      <BurgerConstructor></BurgerConstructor>
      </div>   
    </div>
  );
}

export default App;
