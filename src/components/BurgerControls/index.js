import css from './style.module.css';

import BurgerControl from '../BurgerControl';

const BurgerControls = (props) => {
  return (
    <div className={css.BurgerControls}>
      <BurgerControl
        type='salad'
        ingredientNames={props.ingredientNames}
        addIngredient={props.addIngredient}
        removeIngredient={props.removeIngredient}
      />
      <BurgerControl
        ingredientNames={props.ingredientNames}
        type='bacon'
        addIngredient={props.addIngredient}
        removeIngredient={props.removeIngredient}
      />
      <BurgerControl
        ingredientNames={props.ingredientNames}
        type='cheese'
        addIngredient={props.addIngredient}
        removeIngredient={props.removeIngredient}
      />
      <BurgerControl
        ingredientNames={props.ingredientNames}
        type='meat'
        addIngredient={props.addIngredient}
        removeIngredient={props.removeIngredient}
      />
    </div>
  );
};

export default BurgerControls;
