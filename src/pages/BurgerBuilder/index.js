import { Component } from 'react';

import Burger from '../../components/Burger';
import BurgerControls from '../../components/BurgerControls';

export default class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0,
    },
    ingredientNames: {
      salad: 'Салад',
      bacon: 'Гахайн мах',
      meat: 'Үхрийн мах',
      cheese: 'Бяслаг',
    },
  };

  addIngredient = (type) => {
    const newIngredients = { ...this.state.ingredients };
    newIngredients[type]++;
    this.setState({ ingredients: newIngredients });
  };

  removeIngredient = (type) => {
    const newIngredients = { ...this.state.ingredients };
    newIngredients[type]--;
    this.setState({ ingredients: newIngredients });
  };
  render() {
    return (
      <div>
        <Burger ingredients={this.state.ingredients} />
        <BurgerControls
          ingredientNames={this.state.ingredientNames}
          addIngredient={this.addIngredient}
          removeIngredient={this.removeIngredient}
        />
      </div>
    );
  }
}
